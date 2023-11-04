const { readFile } = require("fs");
console.log("task started");

readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log("completed first task");
});

console.log("task completed");
