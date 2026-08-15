/**
 * One-off: make near-white pixels transparent on the games logo PNG.
 * Run: node scripts/knockout-logo-white.cjs
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const input = path.join(__dirname, "..", "public", "fat-snail-games-logo.png");
const tmp = path.join(__dirname, "..", "public", "fat-snail-games-logo.tmp.png");

(async () => {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  if (channels !== 4) throw new Error(`Expected RGBA, got ${channels} channels`);

  // Near-white background only (not yellow/cyan glitch: those have a low channel).
  const minRgb = 244;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= minRgb && g >= minRgb && b >= minRgb) {
      data[i + 3] = 0;
    }
  }

  await sharp(Buffer.from(data), { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(tmp);

  fs.renameSync(tmp, input);
  console.log("Updated", input);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
