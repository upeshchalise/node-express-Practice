const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("content/first.txt", "utf8");
const secondFile = readFileSync("content/second.txt", "utf8");

console.log(firstFile, secondFile);

writeFileSync(
  "content/create-file.txt",
  `This is the result: ${firstFile}, ${secondFile}`,
  { flag: "a" } //using this append the updated, if not used writeFileSync override the content
);
