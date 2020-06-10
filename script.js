// Working with Node and modules
// Node has standard default modules
// Node has 3rd party modules
// to work with node modules, npm
// Step 1
// npm init
// initialize package.json that will hold default information about dependencies and build
// Step 2
// npm install packageName --save
// install package to project
// package should appear in package.json in dependencies
// Step 3
// create a variable that =
// require("desiredPackage")
// use that variable later with dot notation to implement packages methods
// Step 4
// use package 
// Bellow code demonstraits a npm package that generates a random name
// for github use git ignore files so that was those using repo don't have to constantly download it

var supervillain = require("supervillains");

var mySupervillain = supervillain.random();
console.log(mySupervillain);
