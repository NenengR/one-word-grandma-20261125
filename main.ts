// One Word from Grandma: exactly one word, 1 to 30 characters.
// The word is "Whosdis", 7 characters, the mashed text-speak a grandma
// sends when a strange number messages her. Revision: clarified comment only.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const word = "Whosdis";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
