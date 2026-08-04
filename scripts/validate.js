const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");

if (!html.includes('role="status"') || !html.includes('aria-label="Loading"')) {
  throw new Error("The loading indicator must expose an accessible status.");
}

if (!html.includes('viewBox="0 0 24 24"') || !css.includes("@keyframes spin")) {
  throw new Error("The animated loading artwork is incomplete.");
}

console.log("Static artifact loader validation passed.");
