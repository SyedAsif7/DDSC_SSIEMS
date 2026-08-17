/**
 * One-shot optimizer: creates .webp siblings for large raster images under public/images.
 * Also writes src/lib/webp-manifest.json so getAssetPath can prefer WebP at runtime.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images");
const MANIFEST = path.resolve("src/lib/webp-manifest.json");
const MAX_WIDTH = 1600;
const QUALITY = 72;
const MIN_BYTES = 100_000;
const EXT = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function toPublicPath(file) {
  const rel = path.relative(path.resolve("public"), file).split(path.sep).join("/");
  return `/${rel}`;
}

async function optimize(file) {
  const ext = path.extname(file);
  if (!EXT.has(ext)) return null;

  const stat = await fs.stat(file);
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const publicOriginal = toPublicPath(file);

  if (stat.size < MIN_BYTES) {
    const existing = await fs.stat(out).catch(() => null);
    if (existing?.size) return { publicOriginal, out, skipped: true, before: stat.size, after: existing.size };
    return null;
  }

  try {
    const existing = await fs.stat(out).catch(() => null);
    if (existing && existing.size > 0 && existing.mtimeMs >= stat.mtimeMs) {
      return { publicOriginal, out, skipped: true, before: stat.size, after: existing.size };
    }
  } catch {
    /* create */
  }

  await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(out);

  const after = (await fs.stat(out)).size;
  return { publicOriginal, out, skipped: false, before: stat.size, after };
}

const files = await walk(ROOT);
const webpPaths = [];
let saved = 0;

for (const file of files) {
  const result = await optimize(file);
  if (!result) continue;
  webpPaths.push(result.publicOriginal);
  const mb = (n) => (n / 1024 / 1024).toFixed(2);
  const label = result.skipped ? "skip" : "ok";
  console.log(`[${label}] ${mb(result.before)} → ${mb(result.after)} MB  ${path.relative(ROOT, result.out)}`);
  if (!result.skipped) saved += result.before - result.after;
}

// Also register any existing webp siblings we may have missed
for (const file of files) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const out = file.replace(/\.(jpe?g|png)$/i, ".webp");
  const exists = await fs.stat(out).catch(() => null);
  if (exists?.size) {
    const p = toPublicPath(file);
    if (!webpPaths.includes(p)) webpPaths.push(p);
  }
}

webpPaths.sort();
await fs.writeFile(MANIFEST, JSON.stringify(webpPaths, null, 2) + "\n");
console.log(`\nSaved ~${(saved / 1024 / 1024).toFixed(1)} MB of new WebP assets`);
console.log(`Manifest: ${webpPaths.length} paths → ${path.relative(process.cwd(), MANIFEST)}`);
