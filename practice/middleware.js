/// example one of middleware
// import express from "express"
// const app = express()
// const reqFilter=(req,res,next)=>{ /// this is the middleware ,the next parameter will redirect to next if the conditions mets
//     const salary = req.query.salary
//     if(!salary){
//         res.send("No salary provides")
//     }else if (salary<50000){
//         res.send("Your salary is below 50000 you can not access this application further")
//     }else{
//         next()
//     }
// }
// app.use(reqFilter) // here we use the middleware
// app.get("/",(req,res)=>{
//     res.send("welcome to home page")
// })
// app.get("/contact",(req,res)=>{
//     res.send("welcome to contact page")
// })
// app.get("/about",(req,res)=>{
//     res.send("welcome to about page")
// })
// app.get("/services",(req,res)=>{
//     res.send("welcome to services page")
// })
// app.get("/address",(req,res)=>{
//     res.send("welcome to address page")
// })
// app.get("*",(req,res)=>{
//     res.send("404 page not found")
// })
// const PORT = 3000
// app.listen(PORT,()=>{
//     console.log(`The server has been started at http://localhost:${PORT}`)
// })
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
////// example two of middleware
import express from "express"
const app = express()
const userLogin = true;
const checkUserLogin =(req,res,next)=>{
    if(!userLogin){
        res.send("Please login to proceed further")
    }else{
        next()
    }
}
app.use(checkUserLogin)
app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})
app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page")
})
const PORT =3000
app.listen(PORT,()=>{
    console.log(`The server has been started at http://localhost:${PORT}`)
})