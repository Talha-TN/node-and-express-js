import express from "express";
import employee from "./models/employeeModle.js";
import connectDb from "./db/db_connection.js";
connectDb();
const addEmployyes = async () => {
  await employee.create({
    name: "Hussain Nawaz",
    email: "Hussain123@gmail.com",
    gender: "male",
    department: "software engineering",
    position: "Senior software engineer",
  });
};
addEmployyes();
const getEmployees =async()=>{
    const employeesData= await employee.find()
    console.log(employeesData)
}
getEmployees()
const app = express();
app.get("/",(req,res)=>{
    res.send("Welcome to data base connection")
})
app.listen(3000, () => {
  console.log(`The server has started at port http://localhost:3000`);
});
