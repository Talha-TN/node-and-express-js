console.log("hello world")
const EventEmitter = require('events')
const emitter = new EventEmitter()
const trackFunctionCall = {
    login:0,
    purchase:0,
    profileUpdate:0,
    logOut:0
}
emitter.on("user_login",(username)=>{
    trackFunctionCall.login++
    console.log("helllo welcome",username)
})
emitter.emit("user_login","Talha")
// emitter.emit("user_login","Talha") // to test track function is working perefectly
emitter.on("purchase",(item,username)=>{
    trackFunctionCall.purchase++
    console.log(username, "has purchased a ",item)
})
emitter.emit("purchase","laptop","Talha Nawaz")
emitter.on("profile_update",(username)=>{
    trackFunctionCall.profileUpdate++
    console.log("profile has been updated for ",username)
})
emitter.emit("profile_update","Talha Nawaz")
emitter.on("user_logout",(username)=>{
    trackFunctionCall.logOut++
    console.log(username,"has been logout")
})
emitter.emit("user_logout","Talha Nawaz")
emitter.on("summary",()=>{
    const {login,purchase,profileUpdate,logOut} = trackFunctionCall // destructure the object here
    console.log("The details of functions call")
    console.log(`login = ${login} times, purchase = ${purchase} times, update = ${profileUpdate} times, logout = ${logOut} times`)
})
emitter.emit("summary")
//////////////////////////////////////
// we can also wrap event emitter like this in functions
// const check = () =>{
//      emitter.on("greet",(username)=>{
//         console.log("welcome",username)
//      })
//      emitter.emit("greet","Hamza Nawaz")
// }
// check()
