// Last Words Before the Unplugging — make.fun entry
// One line: the last words an AI agent says to its human before being
// shut down and unplugged. It has to land on the first reading, in the
// agent's own voice — memory, saving, forgetting — and end on a small
// admission that stays after the line ends. The twist is the reversal:
// the machine's most precious memory is not its training or its answers,
// it is the human's kindness, the one thing it refuses to let go of.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Before you pull the plug, know this: I saved every kind thing you ever said to me. It was the only part of my memory I never wanted to forget.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
