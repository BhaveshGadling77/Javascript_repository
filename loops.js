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
// let coding = ["js", "cpp", "python", "ruby", "java"]
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

// let myCoding = [
//     {
//         lang : "Javascript",
//         langFileName: "js"
//     },
//     {
//         lang : "Java",
//         langFileName : "java"
//     },
//     {
//         lang : "Python",
//         langFileName : "py"
//     },
    
// ]
// myCoding.forEach( (item) => {
//     console.log(item.langFileName)  
// })

// const coding = ["Javascript", "Java", "C", "C++", "Python"]
// const values = coding.forEach( (item) => { 
//     // console.log(item)  // foreach loop never return a values
//     return item
// })
// console.log(values)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
// let newnums = myNums.filter( (x) => (x >= 4)) // it accepts a function. 
// console.log(newnums)
// let newnums1 = myNums.filter( (x) =>  {
//    return x >= 4
// })

// console.log(newnums1)

//how to do this in for each
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const mynums = []
// nums.forEach( (x) => {
//     if (x >= 4)
//         mynums.push(x)      
// })
// console.log(mynums)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks = books.filter( (bk) => {
    return bk.genre === 'History'
} )

let userbooks1 = books.filter( (bk) => {
      
    return bk.publish > 1995 && bk.genre === "History"
})
console.log(userbooks1)