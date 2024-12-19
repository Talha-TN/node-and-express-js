// importing single thing
// const sum = require("./add.js") // this way import something in node js
// const details = require("./add.js")
// let addition = sum(4,5)
// console.log(addition)
// console.log(details)
//////////////////////////////////////////////////////////////////////////
// ********************* importing muliple things *****************************
// const details = require("./add.js"); // here i import the details object which contain my detaisl
// const { myName, myAge, myCity, nameShortner } = details; // here i destructre details object to extract properties from it
// console.log(myName);
// console.log(myAge);
// console.log(myCity);
// let shortName = nameShortner("Talha Nawaz", 6); // name shortner function export from add module
// console.log(shortName);
/////////////////////////////////////////
// chechking two exports from add.js
// const myName = require("./add.js")
// const broName = require("./add.js")
// console.log(myName)
// console.log(broName)
// here when i run this code we see both hamza nawaz in the console this is due to this because we cannnot export two module like that node js this way both the export have same value
///////////////////////////////////////////////////////////////////
// ES6 imports and imports
// import { myName ,myGender } from "./add.js";
// import myAge from "./add.js";
// console.log(myName)
// console.log(myGender)
// console.log(myAge)
// this way we can also import and exports ,this is modern way like we use in react js
///////////////////////////////////////////////////////////////////////
// import by putting dot after module.exports
// const {add,subtract}=require("./add.js")
// add(2,3)
// subtract(5,2)