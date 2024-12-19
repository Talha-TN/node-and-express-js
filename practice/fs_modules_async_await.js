const { rmdir } = require("fs")
const fs = require("fs/promises")
// ///////////////////////////////////////////////////////////////////////////////
// ///////// fs modules using async way
// ///  write file
// const writeFileExample =  async (filename) => {
//     try{
//         await  fs.writeFile(filename,"writing to file using async awiat ","utf-8")
//         console.log("file created")

//     }catch(error){
//        console.error(error)
//     }

// }
// writeFileExample("./async_file.txt")
// //////////////////////////////////////////////////////////////////////
// /////// read file
// const readFileExample = async (filename) => {
//     try{
//        let data = await fs.readFile(filename,"utf-8")
//        console.log("the data in the file is",data)

//     }catch(error){
//         console.error(error)
//      }
// }
// readFileExample("./async_file.txt")
// /////////////////////////////////////////////////////////
// ////////// update file
// const updateFileExample = async (filename) => {
//    try{
//     await fs.appendFile(filename,"\nHello my name is Talha nawaz","utf-8")
//    }catch(err){
//     console.error(err)
//    }
// }
// updateFileExample("./async_file.txt")
//////////////////////////////////////////////////////////////////////////////
//////// delete file
// const deleteFileExample = async(filename)=>{
//     try{
//         await fs.unlink(filename)
//         console.log("file has been deleted!")
//     }catch(err){
//          console.error(err)
//     }
// }
// deleteFileExample("./async_file.txt")
/////////////////////////////////////////////////////////////
//// ************************** Practice
// const fs = require("fs/promises");
// const myDetails = {
//   emp_id: 245,
//   name: "Talha nawaz",
//   age: "24 years",
//   gender: "male",
//   location: "lahore",
// };
// myDetails.salary = 200000;

// const writeInFile = async (filename) => {
//   // made async function for performing fs modules using async awiat
//   try {
//     await fs.writeFile(filename, JSON.stringify(myDetails), "utf-8");
//     console.log("data has been write to file");
//   } catch (err) {
//     console.error(err);
//   }
// };
// writeInFile("./practice1.txt"); // function calll
/////////////////////update file
// const updateFile = async (filename) => {
//   try {
//     await fs.appendFile(filename, `\n${JSON.stringify(myDetails)}`);
//     console.log("data has been updated in the");
//   } catch (err) {
//     console.error(err);
//   }
// };
// updateFile("./practice1.txt"); // function call
// read file
// const readFileExample = async (filename) => {
//   try {
//     let data = await fs.readFile(filename, "utf-8");
//     console.log("the date in the file is", data);
//   } catch (err) {
//     console.error(err);
//   }
// };
// readFileExample("./practice1.txt")
//// delete file
// const deleteFile = async (filename) => {
//    try{
//       await fs.unlink(filename)
//       console.log("deleted the file")

//    }catch(err){
//        console.error(err)
//    }
// }
// deleteFile("./practice1.txt")
/////////////////
// acccess a file (check a file is present or not)
// const checkFile = async (filename) =>{ // check for file is present or not
//    try{
//     await fs.access(filename)
//     console.log("exits")
//    }catch(err){
//       console.log("file not exist")
//    }
// }
// checkFile("practice1.txt")
//////////////// rename file
// const renameFile = async(filename) =>{
//    try{
//       await fs.rename(filename,"rename_file.txt") // the second argument here is rename 

//    }catch(err){
//       console.error(err)
//    }
// }
// renameFile("./file.txt")
// appendeed data
// const data =["talha","male",24,"abbottabad","lahore"]
// const appendToRenameFile = async (filename) => {
//    try{
//        fs.appendFile(filename,JSON.stringify(data))
//        console.log("data has been appended to rename_file.txt")
//    }catch(err){
//       console.log("error has came ",err)

//    }
// }
// appendToRenameFile("./rename_file.txt")
////////////////// make a directory
// const makeFolder = async (foldername) =>{ // function to make a directory
//    try{
//      await fs.mkdir(foldername)
//      console.log("folder has been created succesfully")
//    }catch(err){
//       console.error(err)

//    }
// }
// makeFolder("./talha/zarar") // this way we can give the path and folder name
/////////////// remove a directory
// const deleteFolder = async (foldername) =>{ // function to delete a directory
//    try{
//       await fs.rmdir(foldername) 
//       console.log("folder has been deleted")
//    }catch(err){
//       console.error(err)
//    }
// }
// deleteFolder("./talha/hamza")

const readTheDirectory = async (path) => {
          try{
            const files = await fs.readdir(path)
            console.log(files,"thsese are the files present at:", path)
            console.log("The total files present in the current directory is :",files.length)
            files.map((val,i)=>console.log(`The files present at number  ${[i+1]} is ${val}`))
          }catch (err){
            console.err(err)
          }
}
readTheDirectory(".")