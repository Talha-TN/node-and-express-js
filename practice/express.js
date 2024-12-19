import express from "express"
const app = express()
const PORT = 3000
app.get("/",(req,res)=>{
    res.send("Hello world from express hello talha")
    
})
app.listen(PORT,()=>{
    console.log(`the server has started at port http://localhost:${PORT}`)
})