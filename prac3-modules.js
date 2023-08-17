// Modules

// commonJS, every file is module(By default)
// Modules - Encapsultaed code (only share minimum)

// const name = require("./prac4-names");  //this or
const { john, peter } = require("./prac4-names"); //this

const func = require("./prac5-utils");
const items = require("./prac6-alternative");
// console.log(items); //{ item: [ 'putin', 'kim-jong' ], singlePerson: { name: 'xi jing' } }

require("./prac7-mind-grenade");

// func("lily");
// func(name.john); //this or
// func(john); //this
// func(peter);
