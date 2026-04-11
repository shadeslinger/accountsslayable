#!/usr/bin/env node
/**
 * Generate an image via fal.ai Flux schnell and save it locally.
 *
 * Usage:
 *   node scripts/generate-image.mjs --prompt "..." --out public/images/blog/foo.jpg [--size landscape_16_9] [--steps 4]
 *
 *   npm run gen-image -- --prompt "..." --out public/images/pillars/personal-finance.jpg --size square_hd
 *
 * Env:
 *   FAL_KEY — required. Load via .env.local (Next.js) or export in the shell.
 *
 * Output:
 *   Writes the generated image to --out and logs the fal.ai response metadata
 *   (seed, timing, size). Also appends a changelog entry to prompts/image-style.md.
 *
 * Notes:
 *   - Flux schnell supports image_size values: square_hd, square, portrait_4_3,
 *     portrait_16_9, landscape_4_3, landscape_16_9 — or a custom {width, height}.
 *   - The script reads prompts/image-style.md and prepends the STYLE PREAMBLE
 *     block (everything between "## STYLE PREAMBLE" and the next "---") to
 *     whatever --prompt you pass, so every generated image is on-brand.
 *   - Response images from fal.ai are hosted URLs; we fetch the bytes and
 *     write them to disk.
 */

import { readFile, writeFile, mkdir, appendFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = resolve(__dirname, "..");

// --- Load .env.local manually (so we don't need dotenv) ---
async function loadEnvLocal() {
  const envPath = resolve(REPO_ROOT, ".env.local");
  if (!existsSync(envPath)) return;
  const raw = await readFile(envPath, "utf-8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

// --- Extract STYLE PREAMBLE from image-style.md ---
async function getStylePreamble() {
  const stylePath = resolve(REPO_ROOT, "prompts", "image-style.md");
  if (!existsSync(stylePath)) {
    console.warn(
      "[gen-image] prompts/image-style.md not found, proceeding without preamble"
    );
    return "";
  }
  const raw = await readFile(stylePath, "utf-8");
  const match = raw.match(/## STYLE PREAMBLE\s*\n([\s\S]*?)\n---/);
  if (!match) {
    console.warn(
      "[gen-image] Could not find STYLE PREAMBLE block in image-style.md"
    );
    return "";
  }
  return match[1]
    .split("\n")
    .map((line) => line.replace(/^> ?/, "").trim())
    .filter(Boolean)
    .join(" ");
}

// --- CLI args ---
const { values } = parseArgs({
  options: {
    prompt: { type: "string" },
    out: { type: "string" },
    size: { type: "string", default: "landscape_16_9" },
    steps: { type: "string", default: "4" },
    "skip-preamble": { type: "boolean", default: false },
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help || !values.prompt || !values.out) {
  console.log(`
Usage:
  node scripts/generate-image.mjs --prompt "..." --out <path> [options]

Options:
  --prompt "..."       Image prompt (required). Style preamble is prepended automatically.
  --out <path>         Output file path, relative to repo root (required).
                       Example: public/images/blog/my-post.jpg
  --size <size>        fal.ai image_size. Default: landscape_16_9
                       Options: square_hd, square, portrait_4_3, portrait_16_9,
                                landscape_4_3, landscape_16_9
  --steps <n>          Inference steps. Default: 4 (schnell is optimized for 4)
  --skip-preamble      Don't prepend the style preamble (use exact --prompt as-is)
  -h, --help           Show this help
`);
  process.exit(values.help ? 0 : 1);
}

await loadEnvLocal();

const FAL_KEY = process.env.FAL_KEY;
if (!FAL_KEY) {
  console.error(
    "[gen-image] FAL_KEY not set. Add it to .env.local or export it in your shell."
  );
  process.exit(1);
}

// --- Build full prompt ---
const preamble = values["skip-preamble"] ? "" : await getStylePreamble();
const fullPrompt = preamble
  ? `${preamble} ${values.prompt}`
  : values.prompt;

console.log("[gen-image] Prompt:");
console.log(`  ${fullPrompt.slice(0, 300)}${fullPrompt.length > 300 ? "..." : ""}`);
console.log(`[gen-image] Size: ${values.size}  Steps: ${values.steps}`);

// --- Call fal.ai ---
const FAL_ENDPOINT = "https://fal.run/fal-ai/flux/schnell";

const startedAt = Date.now();
const res = await fetch(FAL_ENDPOINT, {
  method: "POST",
  headers: {
    Authorization: `Key ${FAL_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt: fullPrompt,
    image_size: values.size,
    num_inference_steps: Number(values.steps),
    num_images: 1,
    enable_safety_checker: true,
  }),
});

if (!res.ok) {
  const errText = await res.text();
  console.error(`[gen-image] fal.ai returned ${res.status}:`);
  console.error(errText);
  process.exit(1);
}

const data = await res.json();
const image = data.images?.[0];
if (!image?.url) {
  console.error("[gen-image] No image URL in response:", data);
  process.exit(1);
}

const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
console.log(
  `[gen-image] fal.ai ok (${elapsed}s, seed=${data.seed}, size=${image.width}x${image.height})`
);

// --- Download image bytes ---
const imgRes = await fetch(image.url);
if (!imgRes.ok) {
  console.error(`[gen-image] Failed to download image: ${imgRes.status}`);
  process.exit(1);
}
const bytes = Buffer.from(await imgRes.arrayBuffer());

// --- Write to disk ---
const outPath = resolve(REPO_ROOT, values.out);
await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, bytes);

const kb = (bytes.length / 1024).toFixed(1);
console.log(`[gen-image] Wrote ${relative(REPO_ROOT, outPath)} (${kb} KB)`);

// --- Append changelog entry to image-style.md ---
try {
  const stylePath = resolve(REPO_ROOT, "prompts", "image-style.md");
  const today = new Date().toISOString().slice(0, 10);
  const entry = `\n### ${today} — ${relative(REPO_ROOT, outPath)}\nPrompt: ${values.prompt}\nSeed: ${data.seed} • Size: ${image.width}x${image.height} • Steps: ${values.steps}\n`;
  await appendFile(stylePath, entry);
} catch (err) {
  console.warn("[gen-image] Could not append to image-style.md changelog:", err.message);
}

console.log("[gen-image] Done.");
