import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry = "Unsubscribed";
// One word verdict: the ex as a newsletter you opted out of.
const outPath = process.env.ENTRY_OUTPUT || "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(entry);
