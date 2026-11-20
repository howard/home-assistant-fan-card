# TODO

- [x] Research firmware entity naming (multi-fan-control-esp32): `sensor.onlyfans_<id>_fan<i>_tacho` (Hz), `binary_sensor.onlyfans_<id>_fan<i>_problem`
- [x] Scaffold: hacs.json, package.json (esbuild)
- [x] Generate Noctua-style beige fan SVG (parametric blade geometry; wide swept blades with thin tip slits, verified 65% annulus fill)
- [x] Implement card: fans config, fans_per_row, speed_scale, rAF rotation, red border on problem
- [x] Implement config editor (ha-entity-picker based, bundled into dist/fan-card.js)
- [x] Build with esbuild -> dist/fan-card.js (single bundle incl. editor)
- [x] Demo page with mocked hass; verified on all 3 engines (Firefox, Chrome/Blink, Safari/WebKit via docker) — 8 fans, 8 spinning rotors, 0 errors
- [x] README/docs + HACS packaging polish (render_readme, category: plugin)
- [x] Initial commit

# Later ideas
- [ ] Config editor: live visual preview inside the editor
- [ ] Option to show CPU-style percentage instead of Hz label
- [ ] Optional border color / problem styling overrides
