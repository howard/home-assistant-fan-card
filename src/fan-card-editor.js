// Config editor for ha-fan-card.
// Runs inside the Home Assistant dashboard, which provides <ha-entity-picker>
// and <mwc-button> in its runtime. The demo page (test-manual.html) ships a
// lightweight mock of ha-entity-picker so the editor can be smoke-tested
// outside HA.
import { LitElement, html, css } from "lit";

export const DEFAULT_CONFIG = {
  fans: [],
  fans_per_row: 4,
  speed_scale: 0.15,
};

class FanCardEditor extends LitElement {
  static properties = {
    hass: { type: Object },
    config: { type: Object },
  };

  setConfig(config) {
    this.config = {
      fans_per_row: DEFAULT_CONFIG.fans_per_row,
      speed_scale: DEFAULT_CONFIG.speed_scale,
      ...config,
      fans: (config.fans || []).map((f) => ({ ...f })),
    };
  }

  _fire() {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this.config },
        bubbles: true,
        composed: true,
      })
    );
  }

  _set(patch) {
    this.config = { ...this.config, ...patch };
    this._fire();
  }

  _setFan(i, patch) {
    const fans = this.config.fans.map((f, j) =>
      j === i ? { ...f, ...patch } : f
    );
    this._set({ fans });
  }

  _addFan() {
    this._set({ fans: [...this.config.fans, { entity: "" }] });
  }

  _removeFan(i) {
    this._set({ fans: this.config.fans.filter((_, j) => j !== i) });
  }

  static styles = css`
    :host {
      display: block;
      color: var(--primary-text-color, #1c1c1c);
    }
    .editor {
      padding: 4px 0;
    }
    h3 {
      font-size: 14px;
      margin: 0 0 8px;
    }
    .fan-card {
      position: relative;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      border-radius: 8px;
      padding: 12px 36px 12px 12px;
      margin-bottom: 10px;
    }
    .fan-card .remove {
      position: absolute;
      top: 6px;
      right: 6px;
      border: none;
      background: none;
      color: var(--error-color, #c62828);
      font-size: 15px;
      cursor: pointer;
      padding: 4px 6px;
      border-radius: 4px;
    }
    .fan-card .remove:hover {
      background: rgba(198, 40, 40, 0.1);
    }
    label {
      display: block;
      font-size: 12px;
      opacity: 0.85;
      margin: 8px 0 4px;
    }
    input[type="text"] {
      width: 100%;
      box-sizing: border-box;
      font: inherit;
      padding: 8px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--input-fill, transparent);
      color: var(--primary-text-color, #1c1c1c);
    }
    .add {
      border: 1px dashed var(--divider-color, rgba(0, 0, 0, 0.3));
      background: none;
      color: var(--primary-color, #03a9f4);
      font: inherit;
      font-weight: 600;
      border-radius: 8px;
      padding: 10px;
      width: 100%;
      cursor: pointer;
      margin-bottom: 12px;
    }
    .add:hover {
      background: rgba(3, 169, 244, 0.06);
    }
    .opt-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
    .opt-row label {
      margin: 0;
      min-width: 110px;
    }
    .opt-row input[type="number"] {
      font: inherit;
      padding: 6px 8px;
      width: 90px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
      border-radius: 6px;
      background: var(--input-fill, transparent);
      color: var(--primary-text-color, #1c1c1c);
    }
    .opt-row .hint {
      font-size: 11px;
      opacity: 0.6;
    }
    .empty {
      opacity: 0.6;
      font-size: 13px;
      margin: 4px 0 10px;
    }
  `;

  render() {
    if (!this.hass || !this.config) return html``;
    const fans = this.config.fans || [];
    return html`
      <div class="editor">
        <h3>Fans</h3>
        ${fans.length === 0
          ? html`<div class="empty">
              No fans configured yet — add the first one below.
            </div>`
          : ""}
        ${fans.map(
          (fan, i) => html`
            <div class="fan-card">
              <button
                class="remove"
                title="Remove fan"
                @click=${() => this._removeFan(i)}
              >
                ✕
              </button>
              <label>Speed sensor (Hz)</label>
              <ha-entity-picker
                .hass=${this.hass}
                .value=${fan.entity || ""}
                .include-domains=${["sensor"]}
                allow-custom-entity
                @value-changed=${(e) =>
                  this._setFan(i, { entity: e.detail.value || undefined })}
              ></ha-entity-picker>
              <label>Name (optional)</label>
              <input
                type="text"
                .value=${fan.name || ""}
                placeholder="e.g. Fan 1"
                @change=${(e) =>
                  this._setFan(i, { name: e.target.value || undefined })}
              />
              <label>Problem sensor (optional, binary)</label>
              <ha-entity-picker
                .hass=${this.hass}
                .value=${fan.problem_entity || ""}
                .include-domains=${["binary_sensor"]}
                allow-custom-entity
                @value-changed=${(e) =>
                  this._setFan(i, {
                    problem_entity: e.detail.value || undefined,
                  })}
              ></ha-entity-picker>
            </div>
          `
        )}
        <button class="add" @click=${this._addFan}>＋ Add fan</button>

        <div class="opt-row">
          <label>Fans per row</label>
          <input
            type="number"
            min="1"
            max="12"
            step="1"
            .value=${this.config.fans_per_row ?? 4}
            @change=${(e) =>
              this._set({
                fans_per_row: Math.max(1, parseInt(e.target.value, 10) || 4),
              })}
          />
        </div>
        <div class="opt-row">
          <label>Speed scale</label>
          <input
            type="number"
            min="0.05"
            max="5"
            step="0.05"
            .value=${this.config.speed_scale ?? 0.15}
            @change=${(e) =>
              this._set({
                speed_scale: Math.max(0.05, parseFloat(e.target.value) || 0.15),
              })}
          />
          <span class="hint">0.15 = blades visible, 1.0 = real-time</span>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("fan-card-editor")) {
  customElements.define("fan-card-editor", FanCardEditor);
}

export { FanCardEditor };
