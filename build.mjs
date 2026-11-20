import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/fan-card.js"],
  bundle: true,
  format: "iife",
  globalName: "FanCardBundle",
  minify: true,
  outfile: "dist/fan-card.js",
  platform: "browser",
}).catch(() => process.exit(1));
