import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const entry = "One star. He cut off my best leaf because it blocked the TV. It was my only leaf facing the sun. He calls it pruning. I call it an amputation with good lighting.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);

// One-star review, written in sap: the plant's only sun-facing leaf, pruned for the TV.
