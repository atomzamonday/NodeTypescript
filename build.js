require("esbuild").buildSync({
  platform: "node",
  target: "node16",
  minify: true,
  treeShaking: true,
  bundle: true,
  entryPoints: ["./tmp/index.js"],
  outfile: "./build/index.js",
});

console.log("build successfully");
