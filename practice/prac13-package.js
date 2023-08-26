// manual approach (create package.json in the root, create properties etc)
// npm init( step by step, press enter to skip)
// npm init -y (everything default)

const lodash = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItem = lodash.flattenDeep(items);

console.log(newItem);
