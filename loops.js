//for of loop
const array = [1, 2, 3, 4, 5];
// for (const element of array) {
//   console.log(element);
// }
const greetings = "Hello World"

// for (let greets of greetings) {
//     console.log(greets);
// }

//Maps
// const map = new Map();
// map.set("name", "John");
// map.set("age", 30);
// map.set("city", "New York");
// // console.log(map)
 
// for (const [key, value] of map) {  
//     // console.log(key, value);
// }
// myobj = {
//     'game1': "NFS",
//     'game2': "PUBG",
//     'game3': "FIFA",
//     'game4': "COD",
// }

// for (let [key, value] of myobj) {
//     console.log(key, ' :- ', value)
// }

//something more about objects 
const myobj = {
    js : "Javascript",
    rb: "ruby",
    cpp : "C++",
    py: "Python"
}

//for in loop is used for the iterate over the object
// for (const key in myobj) {
//    console.log(` key of the myobj is ${key} value of it is ${myobj[key]}`);
// }

// let programming = ["js", "py", "cpp", "java"]
// console.log(`programmer must know languages:- `)
// for (key in programming) {
//     console.log(`${programming[key]}`)
// }

//for in loop is not work for the maps()

//foreach loop
let coding = ["js", "cpp", "python", "ruby", "java"]
// coding.forEach( function(item) {
//     console.log(item)
// });

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printme(item) {
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

let myCoding = [
    {
        lang : "Javascript",
        langFileName: "js"
    },
    {
        lang : "Java",
        langFileName : "java"
    },
    {
        lang : "Python",
        langFileName : "py"
    },
    
]
myCoding.forEach( (item) => {
    console.log(item.langFileName)  
})