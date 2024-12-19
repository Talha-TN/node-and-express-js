//////////////////////////////////////////////////////////////////////////////////////////////
// ******************************** synchronus way ***************************
// creating file
const fs = require("fs")
// firts way to create a file and write in it
const fileName = "fs.txt" // make a file name which will pass to readfilesync
// const createFile=fs.writeFileSync(fileName,"This is Talha Nawaz learning node js","utf-8")
// console.log(createFile)
// second way to create a file
// const createFile= fs.writeFileSync("name.txt","my name is talha nawaz","utf-8")
// console.log(createFile)
//////////////////////////////////////////////////////////////////////////////////////////////
// reading data from a file 
// const readFile = fs.readFileSync(fileName)
// const readNumFile = fs.readFileSync("./num.txt","utf-8") // reading file from same directory
// console.log(readFile.toString()) // to avoid to string just pass utf-8 as second argument in reaffilesync
// console.log(readNumFile)
//////////////////////////////////////////////////////////////////////////////////////////////
//// updating file
// const appendFile = fs.appendFileSync(fileName,"\nThis is updated data in file","utf-8")
// console.log(appendFile)
//////////////////////////////////////////////////////////////////////////////////////////
// delete file
// const deleteFile = fs.unlinkSync("./num.txt");// this way we delete a file
///////////////////////////////////////////////////////////////////////////
// rename file
const reNameFile  = fs.renameSync("./newFileName","newFileName.txt")