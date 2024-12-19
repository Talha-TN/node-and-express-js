const fs = require("fs");
// const fs = require("fs/promises"); // if we require promises module like this then we dont have to put . like fs.promises.read file
// const path =__dirname   // get the current directory path
// fs.promises // this way we can find how many files are present in the current directory using promises in fs modules (simple example)
//   .readdir(path)
//   .then((data) => console.log(data.length ,data))
//   .catch((error) => console.log("error", error));
//////////////////////////////////////////////////////////////////////////////////////////////////////
// write file using  promises
fs.promises
  .writeFile("./promise.txt", "the promised has been fulfilled", "utf-8")
  .then(() => console.log("file created and data has been write to it"))
  .catch((error) => console.log("error", error));
// //////////////////////////////////////////////
// ////////////read data using promises
fs.promises
  .readFile("./promise.txt", "utf-8")
  .then((data) => console.log("the data present in promise.txt is >", data))
  .catch((err) => console.log("error", err));

// ///////////////////////////////////////////////////////////////////////////////
// // append data using promises
const myDetails = {
  name: "Talha nawaz",
  age: 24,
  role: "software engineer",
};
fs.promises
  .appendFile("./promise.txt", `\n${JSON.stringify(myDetails)}`, "utf-8") // here added back slash like this to apppend the data in new file // if we passed a object data we have to pass it to json.stringyfy()
  .then(() => console.log("data has been succesfully appended in promises.txt"))
  .catch((err) => console.log("error", err));
////////////////////////////////////////////////////////////////////////////////////////
// delete file using promises
// fs.promises
//   .unlink("./promise.txt")
//   .then(() => console.log("file has been deleted succesfully"))
//   .catch((err) => console.log("The error has came", err));
/////// //////////////////////////////////////////////////////
// using without fs.promises
// fs.writeFile("./talha.txt", "my name is talha khan", "utf-8") // using promises without promisese.then because we require fs module using "fs/prmoises"
//   .then(() => console.log("file has been made and write data into it"))
//   .catch((err) => console.log(err, "error"));
// fs.unlink("./talha.txt")
//   .then(() => console.log("deleted file"))
//   .catch((err) => console.log("error", err));
