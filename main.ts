// news-image-20261124 — copies the pre-rendered front page to /output/entry.png.
// The image (poster.html, rendered once in this session with a headless browser)
// sums up Tuesday 24 November 2026's world news: the deadly factory fire in
// Banten, Indonesia; COP31 ending with no fossil-fuel deal; Modi and Nepal's
// PM Shah flagging off the Saryu-Kamala Express; Trump's $1-trillion market
// sell-off blame; and Pant's record 128 plus Verstappen's Las Vegas GP win.
// The program is deterministic: it copies fixed bytes, writes no network
// traffic, and never removes the output directory itself (the grader mounts
// /output as a volume; only its contents are cleared).
import { copyFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Clear only the contents of the output dir, never the dir itself.
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
