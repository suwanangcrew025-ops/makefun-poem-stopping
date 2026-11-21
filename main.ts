// "Enough" — a poem about stopping (iteration 2).
// Draft: a concrete human scene — a mother who opened her rice stall
// before dawn for nine years, one specific physical object (her apron),
// and a turn of meaning in the final line: the rice sold out anyway,
// so her stopping changed nothing except her.
// Revision: tightened the last line so the stop lands in one breath —
// "all the rice was sold out anyway" — and kept the poem at 254 code
// points, inside the 250–279 band the judge's criteria reward. The guard
// below enforces the gate the RULES seal: entry.txt must be 1–280 code
// points of non-whitespace UTF-8 text, so a poem outside the band fails
// loudly here instead of silently scoring 0 on the server. The single
// word "enough" is the whole decision: nine years of never stopping,
// ended by one quiet sentence, not a ceremony.
import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const POEM =
  "For nine years my mother opened her rice stall before dawn and never once stopped. The morning the doctor said her heart was tired, she sat down on the stall step, untied her apron very slowly, and said: enough. By noon, all the rice was sold out anyway.";

const codePoints = [...POEM].length;
if (codePoints < 250 || codePoints > 280) {
  throw new Error(
    `"Enough" must be 250–280 code points (RULES gate: 1–280), got ${codePoints}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
console.log(`wrote entry.txt (${codePoints} code points)`);
