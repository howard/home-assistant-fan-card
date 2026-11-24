// ha-fan-card: a Home Assistant card showing noctua fans whose blades spin at
// the real rate, driven by a sensor entity reporting rotation speed in Hz.
import { LitElement, html, css } from "lit";
import { FAN_SVG } from "./fan-svg.js";
import "./fan-card-editor.js";

class FanCard extends LitElement {
  static properties = {
    hass: { type: Object },
    config: { type: Object },
  };

  connectedCallback() {
    super.connectedCallback();
    this._start();
  }

  static styles = css`
    :host {
      display: block;
      padding: 4px;
    }
    .row {
      display: grid;
      gap: 8px;
      margin-bottom: 8px;
    }
    .fan {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid transparent;
      border-radius: 10px;
      padding: 6px;
      box-sizing: border-box;
      /* Allow shrinking below content size (WebKit keeps the SVG's intrinsic
         ~300px as the grid auto-minimum, which would overflow the row). */
      min-width: 0;
    }
    .fan.problem {
      border-color: #ef5350;
      background: rgba(239, 83, 80, 0.08);
    }
    .svg-wrapper {
      width: 100%;
    }
    .svg-wrapper svg {
      width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
    }
    .label {
      text-align: center;
      font-size: 12px;
      line-height: 1.4;
      color: var(--primary-text-color, #1c1c1c);
      margin-top: 2px;
    }
    .label .hz {
      opacity: 0.7;
    }
    .fan.problem .label {
      color: #c62828;
    }
  `;

  static getConfigElement() {
    return document.createElement("fan-card-editor");
  }

  static getStubConfig() {
    return { fans: [], fans_per_row: 4, speed_scale: 0.15 };
  }

  setConfig(config) {
    if (!config.fans || !config.fans.length) {
      throw new Error("Specify at least one fan in the 'fans' array.");
    }
    this.config = {
      fans_per_row: 4,
      speed_scale: 0.15,
      ...config,
    };
    // Per-fan animation state (angle in degrees, accumulated over time).
    this._rotors = {};
    for (const fan of this.config.fans) {
      this._rotors[fan.entity] = { angle: 0 };
    }
    this._lastTs = 0;
  }

  getCardSize() {
    return Math.ceil(this.config.fans.length / this.config.fans_per_row) * 2;
  }

  // Update the visual speed factor live (called by the config editor/demo slider).
  setSpeedScale(scale) {
    if (!this.config) return;
    this.config.speed_scale = Number(scale) || 0;
    this.requestUpdate();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stop();
  }

  render() {
    if (!this.config) {
      return html``;
    }
    const perRow = Math.max(1, this.config.fans_per_row || 4);
    const rows = [];
    const fans = this.config.fans.map((fan) => this._renderFan(fan));
    for (let i = 0; i < fans.length; i += perRow) {
      rows.push(
        html`<div
          class="row"
          style="grid-template-columns: repeat(${Math.min(
            perRow,
            fans.length - i
          )}, minmax(0, 1fr))"
          >${fans.slice(i, i + perRow)}</div
        >`
      );
    }
    return html`${rows}`;
  }

  _renderFan(fan) {
    const state = this.hass?.states?.[fan.entity];
    const problemState = fan.problem_entity
      ? this.hass?.states?.[fan.problem_entity]
      : null;
    const hz = state ? parseFloat(state.state) : NaN;
    const hasProblem = problemState?.state === "on";
    const hzText = Number.isFinite(hz)
      ? `${Math.round(hz * 10) / 10} Hz`
      : "–";
    const name =
      fan.name ||
      (fan.entity.includes(".") ? fan.entity.split(".").pop() : fan.entity);

    return html`
      <div
        class="fan ${hasProblem ? "problem" : ""}"
        @click=${() => this._handleFanClick(fan.entity)}
      >
        <div class="svg-wrapper"><svg viewBox="0 0 100 100"></svg></div>
        <div class="label">
          <div class="name">${name}</div>
          <div class="hz">${hzText}</div>
        </div>
      </div>
    `;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this._injectSvgs();
    this._collectRotors();
  }

  updated(changedProps) {
    if (changedProps.has("hass") && this.config) {
      // The red-problem border may cause a re-render; ensure rotors stay attached.
      this._collectRotors();
    }
  }

  // Inject the static fan SVG into each wrapper once, using a plain DOM commit.
  _injectSvgs() {
    const wrappers = this.shadowRoot.querySelectorAll(".svg-wrapper");
    wrappers.forEach((w) => {
      if (w.dataset.injected) return;
      w.innerHTML = FAN_SVG;
      w.dataset.injected = "true";
    });
  }

  // Cache the <g class="fan-rotor"> elements (in config order) for the rAF loop.
  _collectRotors() {
    this._rotorEls = new Map();
    const els = this.shadowRoot.querySelectorAll(".fan-rotor");
    this.config.fans.forEach((fan, i) => {
      this._rotorEls.set(fan.entity, els[i]);
    });
  }

  _start() {
    if (this._rafId) return;
    const tick = (now) => {
      this._rafId = undefined;
      this._tick(now);
    };
    this._rafId = requestAnimationFrame(tick);
  }

  _stop() {
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = undefined;
    }
    this._lastTs = 0;
  }

  _tick(now) {
    // Keep the loop running while connected; it only does real work if rotors spin.
    if (this.isConnected) this._start();

    if (!this.config || !this._rotorEls) return;
    const dt = this._lastTs ? now - this._lastTs : 0;
    this._lastTs = now;
    if (dt <= 0) return;

    const scale = this.config.speed_scale || 1;
    for (const fan of this.config.fans) {
      const state = this.hass?.states?.[fan.entity];
      const hz = state ? parseFloat(state.state) : NaN;
      const el = this._rotorEls.get(fan.entity);
      const rotor = this._rotors[fan.entity];
      if (!el || !rotor || !Number.isFinite(hz) || hz <= 0) continue;
      // dt in ms, hz in rotations per second, scale multiplies the visual speed.
      rotor.angle = (rotor.angle + (hz * scale * 360 * dt) / 1000) % 360;
      // Rotate around the hub center (50,50) in SVG user space — a fixed point,
      // immune to CSS transform-origin/transform-box quirks across browsers.
      el.setAttribute("transform", `rotate(${rotor.angle} 50 50)`);
    }
  }

  _handleFanClick(entity) {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        bubbles: true,
        composed: true,
        detail: { entityId: entity },
      })
    );
  }
}

// Register the card as a custom element (runs when the bundle is loaded).
if (!customElements.get("fan-card")) {
  customElements.define("fan-card", FanCard);
}

// Legacy custom-card registry entry for older dashboards.
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "fan-card")) {
  window.customCards.push({
    type: "fan-card",
    name: "Fan Card (Hz)",
    description: "Noctua-style fans spinning at the real rate from a Hz sensor",
  });
}

// Expose the class for debugging via the bundle's global name (FanCard.FanCard).
export { FanCard };