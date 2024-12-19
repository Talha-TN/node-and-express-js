import express from "express"
const app = express()
app.get("/",(req,res)=>{
    res.send("welcome to home page of router level middleware")
})
const PORT =3000
app.listen(PORT,()=>{
    console.log(`server has started at http://localhost:${PORT}`)
})