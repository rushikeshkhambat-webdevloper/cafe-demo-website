import fs from "fs";
import path from "path";

const map = {
  "#F5EFE6": "#F5EFE6",
  "#F5EFE6": "#F5EFE6",
  "#0F0F0F": "#0F0F0F",
  "#0F0F0F": "#0F0F0F",
  "#C1121F": "#C1121F",
  "#C1121F": "#C1121F",
  "#A00E1A": "#A00E1A",
  "#F2CC8F": "#F2CC8F",
  "#F2CC8F": "#F2CC8F",
  "#E07A5F": "#E07A5F",
  "#E07A5F": "#E07A5F",
  "#E0D5C2": "#E0D5C2",
  "#E0D5C2": "#E0D5C2",
  "MELT": "MELT",
  "melt": "melt",
};

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (/\.(jsx?|css|html)$/.test(file)) {
      let c = fs.readFileSync(full, "utf-8");
      const before = c;
      for (const [from, to] of Object.entries(map)) {
        c = c.split(from).join(to);
      }
      if (c !== before) {
        fs.writeFileSync(full, c, "utf-8");
        console.log("✓ Updated: " + full);
      }
    }
  }
}

console.log("Starting...\n");
walk("./src");
walk(".");
console.log("\n✅ Done!");