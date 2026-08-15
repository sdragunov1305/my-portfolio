import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(__dirname, "..", "_yt.txt"), "utf8");

const m = text.match(/var ytInitialData = (\{[\s\S]*?\});<\/script>/);
if (!m) {
  console.error("no ytInitialData");
  process.exit(1);
}

const data = JSON.parse(m[1]);
/** @type {Map<string, string>} */
const byId = new Map();

function walk(o) {
  if (!o || typeof o !== "object") return;
  if (Array.isArray(o)) {
    o.forEach(walk);
    return;
  }
  if (o.videoRenderer) {
    const vr = o.videoRenderer;
    const id = vr.videoId;
    const runs = vr.title?.runs;
    const title = runs ? runs.map((r) => r.text).join("") : "";
    if (id && title && !byId.has(id)) byId.set(id, title);
  }
  for (const v of Object.values(o)) walk(v);
}

walk(data);

for (const [id, title] of byId) {
  console.log(`${id}\t${title}`);
}
console.error(`# total: ${byId.size}`);
