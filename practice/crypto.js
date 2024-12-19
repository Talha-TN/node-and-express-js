const crypto = require("crypto") // using crypto module for generating random values like for ecvryption
// const randomValue = crypto.randomBytes(8)
// console.log(randomValue.toString("hex")) // here we provide many formate in tostring method to return this type of value
const hashValue = crypto.createHash("sha256").update("Talha Nawaz").digest("hex")
console.log(hashValue)