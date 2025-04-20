//singleton

//object literals
//meth 1
// const mySym = Symbol("MyKey1")
// const JsUser = {
//     name: "Bhavesh",
//     age : 17,
//     [mySym]: "MyKey1",
//     location: "Amravati",
//     email : "bhavesh@google.com",
//     isloggedIn : false,
//     lastLoginDate: ["monday", "Saturday"]
// }
// //methods to access value from an Object
// // console.log(JsUser["email"])
// // console.log(typeof JsUser[mySym])
// JsUser.email = "Bhavesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.age = 19
// console.log(JsUser)

// JsUser.greeting = function() {
//     console.log("Hello User!")
// }
// JsUser.greetingTwo = function() {
//     console.log(`Hello I am ${this.name}`)
// }
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())


// const tinderuser = new Object() // singleton object 
const tinderuser1 = {}
tinderuser1.id = "213af342"
tinderuser1.name = "Sam"
tinderuser1.isLoggedIn = false

// console.log(tinderuser1)
const regularUser = {
    name:"Bhavesh",
    fullname:{
        UserFullName: {
            firstName:"Bhavesh",
            surName: "Gadling"
        }

    }
}
// console.log(regularUser.fullname.UserFullName.firstName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign( obj1, obj2)
// console.log(obj3, obj1);

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const Users = [
    {
        id: 1,
        gmail : "Bhavesh@gmail.com"
    },
    {
        id: 1,
        gmail : "Bhavesh@gmail.com"
    },
    {
        id: 1,
        gmail : "Bhavesh@gmail.com"
    },
    {
        id: 1,
        gmail : "Bhavesh@gmail.com"
    }
    
]
const arr = Object.keys(tinderuser1)
const arr1 = Object.entries(tinderuser1)
console.log(arr1)
Users[1].gmail

console.log(tinderuser1.hasOwnProperty('isloggedin'))

