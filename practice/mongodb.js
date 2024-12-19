import express from "express"
import connectDb from "./db/db_connection.js"
import user from "./models/userModel.js"
const app = express()
connectDb()
const addUser = async()=>{
    await user.create({
        name:"Talha Nawaz",
        email:"Talha123@gmail.com",
        gender:"Male"
    },
    {
        name:"hamza Nawaz",
        email:"Talha123@gmail.com",
        gender:"Male"
    }
)
}
addUser()
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server has started at http://localhost:${PORT}`)
})