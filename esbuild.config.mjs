import { buildSync } from "esbuild";

// 主进程
buildSync({
  entryPoints: ["./src/main.js"],
  bundle: true,
  outfile: "./dist/main.js",
  target: "node16",
  platform: "node",
  format: "cjs",
  charset: "utf8",
  external: ["electron"],
});

console.log("build ok");
