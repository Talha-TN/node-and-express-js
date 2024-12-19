const sum = (a,b)=>{
    console.log("succesfully imported")
    console.log(a+b)
}
const mul =(a,b)=>{
    console.log(a*b)
}
const div =(a,b)=>{
    console.log(a/b)
}
const sub =(a,b)=>{
    console.log(a-b)
}
const square =(a)=>{
    console.log(a*a)
}
export {mul,div,sub,square}; // also export multiples itesm like this
export default sum;