const email = "Bhavesh@gmail.com"
if (email) {
    console.log("Email is present")
}
else {
    console.log("Email is not present")
}   
//falsy values
// 0, "", null, undefined, NaN, -0, BigInt 0n, 
// falsy values are those values which are considered false when encountered in a boolean context
// truthy values
// truthy values are those values which are considered true when encountered in a boolean context
// 1, " ", [], {}, true,"0","false", -1, BigInt 1n, functions(){}, symbols

// for checking array
if (email.length === 0) {
    console.log("Email is not present")
}
//for checking object
const obj = {}
if (Object.keys(obj).length === 0) {
    console.log("Object is empty")
}
// for nullish coalescing operator(??) : null or undefined
let val1;
val1 = null ?? undefined ?? 1;
console.log(val1)

//ternery operator
// syntax : condition ? expression1 : expression2
// if condition is true then expression1 will be executed otherwise expression2 will be executed
// example
const a = 10;
const b = 20;
const c = a > b ? a : b;
console.log(c) 