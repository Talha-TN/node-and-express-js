
const fs = require("fs");
/// create file and write data into it
// const details = "Talha nawaz from abbottabad age 24"
// fs.writeFile("myDetails.txt",details,"utf-8",(error)=>{ // here it take four parameters the first is the file name in which we try to write if the file does not exist it make a file  at the current directory , the socnd is details ehcih we want to write third is utf-8 whcih write te plain text in the file instead of buffer value and third one is a callback function which take error as parameter and s
//     if(error){ // writing data into the file if file does not exist and made a new one
//         console.log("The error has been came")
//     }else{
//         console.log("file has beeen created and data has been saved to the file")
//     }
// })
//////////////////////////////////////////////////////////////
// read data from the file
// fs.readFile("./myDetails.txt", "utf-8", (error, data) => {
//   // here the first parameter is the filename and its path second is utf-8 which convert the buffer value into plain text and third is a callback function which take two parameter one is error and the second id actual data
//   if (data) {
//     console.log("The data in the file is:>>>>", data);
//     console.log(data.toString()) // we can also convert the data into lian text like this if we do not pass utf-8 option
//   }
//   if (error) {
//     console.log("error has come", error);
//   }
// });
///////////////////////////////////////////////////////////////////
////////// update file
// fs.appendFile("./myDetails.txt","\nHello i am moving to lahore by niazi buss","utf-8",(error)=>{ // appendFile method append the data in the file and keeep the previous one ,it is parameters works like writefile
//     // if(error){
//     //     console.log("the error has been came",error)
//     // }else{
//     //     console.log("the data hasssbeeen updated")
//     // }
//          /// conditoon using turnery operator
//          error ? console.log("error has came",error):console.log("data has been update successfully !!!")
   
// })
///////////////////////////////////////////////////////////////////////////
/////// delete the file
// fs.unlink("./delete.txt",(error)=>{ // it take only two parameters one if file name and the other callback function
//     if(error){
//         console.log("error has came",error)
//     }
//     else{
//         console.log("file deleted succcesfully")
//     }
// })
// fs.rename("./rename.txt","renameCorrected.txt",(error)=>{ // rename the existing file
//     if(error){
//         console.log("error has been came",error)
//     }else{
//         console.log("file has been rename succesfully")
//     }
// })
// fs.writeFile("./renameCorrected.txt","data has been added to rename file","utf-8",(error)=>{ // write data into the rename file
//     if(error){
//         console.log("error has been came ",error)
//     }else{
//         console.log("data has been write in renameCorrected.txt")
//     }

// })
// fs.appendFile("./renameCorrected.txt","\nhello kya hal ha","utf-8",(error)=>{
//     if(error){
//         console.log("error has been came ",error)
//     }else{
//         console.log("data has been updated in renameCorrected.txt")
//     }
// })
////////////////////////////////////////////////////////////
// 
const myDetails = { //made object to write it in file
    name: "Talha Nawaz",
    age:24,
    role:"software engineer"
}
fs.writeFile("./details.txt",JSON.stringify(myDetails),"utf-8",(error)=>{ // we can also pass object like this JSON.stringyfy(objectName)
    if(error){
        console.log("error has been came",error)
    }else{
        console.log("file has made and data has been write succesfully")
    }
    
})
