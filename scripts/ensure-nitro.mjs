import { execSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

try {
  require.resolve("nitro/vite");
} catch {
  execSync("npm install nitro@^3.0.260429-beta --no-save", { stdio: "inherit" });
}
