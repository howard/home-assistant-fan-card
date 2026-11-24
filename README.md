# Fan Card (Hz)

A Home Assistant dashboard card that shows one **Noctua-style beige fan** per
configured fan entity, whose **blades spin at the real rotation rate**, driven
by a sensor entity that reports rotation speed in **Hz**.

Designed for ESP32 fan controllers whose tacho sensors report in Hz
(e.g. `sensor.onlyfans_<deviceid>_fan0_tacho`). An optional binary sensor per
fan highlights the fan with a red border when it reports a problem.

## Features

- One animated SVG fan per configured entity — blades rotate at the actual
  rate from the Hz sensor
- `speed_scale` to slow the animation down so individual blades stay visible
  (default `0.15`; `1.0` = real-time rotation)
- `fans_per_row` grid layout
- Optional `problem_entity` (binary sensor) → red border + red label
- Click a fan to open the entity's more-info dialog
- Built-in config editor inside the Home Assistant dashboard
- No HACS frontend dependencies — the bundle includes Lit

## Installation

### HACS (Marketplace)

1. Add this repository as a custom repository in HACS
   (Category: **Dashboard**/**Frontend**).
2. Search for **Fan Card (Hz)** and install it.
3. Reload your browser / refresh the dashboard.

### Manual

Copy `dist/ha-fan-card.js` into your `config/www/` directory and add a
resource reference via **Settings → Dashboards → Resources**:

```
/local/ha-fan-card.js
```

Then add the card to any dashboard.

## Usage

In the dashboard, click **Add card → Custom: Fan Card (Hz)** and configure
the fans in the editor, or configure via YAML:

```yaml
type: custom:fan-card
fans:
  - entity: sensor.onlyfans_e86bead8_fan0_tacho
    name: Front top
    problem_entity: binary_sensor.onlyfans_e86bead8_fan0_problem
  - entity: sensor.onlyfans_e86bead8_fan1_tacho
    name: Front bottom
fans_per_row: 4
speed_scale: 0.15
```

### Options

| Option         | Type     | Default | Description                                                       |
| -------------- | -------- | ------- | ----------------------------------------------------------------- |
| `fans`         | list     | —       | Required. At least one fan.                                       |
| `fans[].entity`| string   | —       | Sensor entity reporting rotation speed in Hz (required).          |
| `fans[].name`  | string   | entity suffix | Optional label shown under the fan.                          |
| `fans[].problem_entity` | string | — | Optional binary sensor; `on` highlights the fan with a red border. |
| `fans_per_row` | number   | `4`     | Fans per grid row.                                                |
| `speed_scale`  | number   | `0.15`  | Animation scale: `1.0` = real-time rotation, `0.15` ≈ 1/6 speed so blades stay visible. |

### Notes on speed

The card reads the sensor value as **Hz** (rotations per second) and rotates
the blades by `hz × speed_scale × 360°` per second. A fan running at 24 Hz
(≈1440 RPM) becomes ~3.6 rotations/s at the default `0.15` scale — fast
enough to look alive while individual blades remain discernible.

## Development

```bash
npm install
npm run build        # regenerate SVG + bundle to dist/ha-fan-card.js
npm run build:dev    # unminified bundle
```

- `scripts/generate-fan-svg.mjs` — parametric Noctua-style fan artwork (tune
  blade geometry here, then `npm run gen:svg`).
- `test-manual.html` — standalone demo with a mocked `hass` (8 fans,
  0–24 Hz, problem entities, speed slider, config-editor smoke test). Serve
  the repo root and open it; no Home Assistant required.

## License

MIT
