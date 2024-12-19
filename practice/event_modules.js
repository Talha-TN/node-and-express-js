// import Emiiter class
const EventEmitter = require("events"); // imported EventEmitter class
const emitter = new EventEmitter(); // make object of the eventEmitter class (now emitter have all the methods of the class)
// emitter.on("greet", () => { // made an event greet(we can made an event like this using emitter) // first argument is function name and second is which logic this function execute
//   console.log("hello talha nawaz");
// });
// emitter.emit("greet");// call the greet event likr this using emitte
// emitter.on("salary",()=>{ // made another event
//     console.log("my salaary is 7982487297432")
// })
// emitter.emit("salary")
// emitter.on("age",()=>{
//     console.log("my age is 24")
// })
// emitter.emit("age")
///////////////////////////////////////
//// passing argument
// emitter.on("greet",(user)=>{ // take one argument
//     console.log("hello",user)
// })
// emitter.emit("greet","Talha Nawaz")
// emitter.on("add",(a,b)=>{ //take two arguments
//     console.log(a+b)
// })
// emitter.emit("add",7,3)
// make an object to pass as argument to emitter event
// const details = {
//   name: "Talha nawaz",
//   age: 24,
//   gender: "male",
//   city: "abbottabad",
// };
// emitter.on("details", (details) => {
//   const { name, age, gender, city } = details; // destructure the details object
//   console.log(`my name is ${name} my age is ${age} and i am a ${gender} \nand i am from ${city}`);
// });
// emitter.emit("details", details); // pass object as an argument
/////////////////////////////////
//////// made an array to pass as arguments
const data = ["Talha Nawaz", 23344, "male", "Abbottabad"];
emitter.on("greet", (userData) => {
  const [userName, age, gender, city] = userData; // destructure the array here it works as sequence
  console.log(userName, age, gender, city);
});
emitter.emit("greet", data);
