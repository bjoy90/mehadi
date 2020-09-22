//Process Module
console.log(global.process.version);
console.log(global.process.versions);
console.log(process.cwd());
console.log("Argv out-----");
console.log(process.argv);
console.log("Command started process");
console.log(process.argv.join(" "));
process.stdout.write("Test");
process.stdout.write("\n");
console.log("ome");
process.nextTick(() => {
  console.log("two");
});
console.log("three");
