// exporting single thing
// const sum =(a,b)=>{
//     return a+b
// }
// let name ='Talha nawaz'
// let details = ["Talha Nawaz","male","24 years","abbottabad"]
// module.exports = sum; // this way we can export data using node js
// module.exports = name;
// module.exports = details;
// exporting multilpe thing
// const myName = "Talha Nawaz";
// const nameShortner = (name, maxLength) => { // made a nameshortner function to export
//   if (name.length > maxLength) {
//     return name.substring(0, maxLength) + "...";
//   }
// };
// const myAge = 24;
// const myCity = "atd";
// const details = {
//   myName,
//   myAge,
//   myCity,
//   nameShortner,
// };
// module.exports = details;
// here i just provide all my info to a object and export this object and use it in another module
//////////////////////////////////////////////////////////////////////
// exporting two things using module.exports
// const MyName = "Talha Nawaz"
// const broName = "Hamza nawaz"
// module.exports = MyName
// module.exports = broName
// here when i run this code we see both hamza nawaz in the console this is due to this because we cannnot export two module like that node js this way both the export have same value
///////////////////////////////////////////////////////////////////////
// ES6 imports and exports
// const myName = "Talha Nawaz"
// const myAge = 24;
// const myGender = "male"
// export {myName,myGender};
// export default myAge;
// this way we can also import and exports ,this is modern way like we use in react js
/// we can use another way simple adding a dot before the value ,treat as object
const add = (a, b) => {
  console.log(a + b);
};
const subtract = (a, b) => {
  console.log(a - b);
};
module.exports.add = add;
module.exports.subtract = subtract;
// also do like this this way it also behave as object
