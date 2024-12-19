import express from "express"
import connectDb from "./db/db_connection.js";
import employee from "./models/employeeModle.js";
connectDb()
const app = express()
app.get("/",async(req,res)=>{
    try{
        const employees = await employee.find()
        res.json(employees)
    }catch(err){
        console.error("error fetching employee data",err)
        res.status(500).send("server error")
    }
})
app.listen(3000,()=>{
    console.log("the server has started at http://localhost:3000")
})