// const array = [0, 1, 2, 3, 4, 5, 6]

// const superheros = ["Iron man", "Captain America", "Hulk"]

// const arr2 = new Array(0, 1, 2, 9, 4, 5, 6, 7)
// // console.log(arr2[-1]);

// // methods 
// arr2.push(7) // push the element in the array at last 

// arr2.pop()

// arr2.unshift(-1) //insert -1 at the starting of the Array 
// arr2.reverse()
// arr2.shift() // remove the first element of the Array

// const newArr = arr2.join() // method copy the elements and convert it into string if you a value then it will add this after every element in the array

// // console.log(arr2)
// // console.log(newArr)
// //slice and spice 

// console.log("A", newArr)
// const myarr = arr2.slice(2, 6) // this slice the array into parts in which smaller number is included and larger number is excluded

// console.log("B",myarr)
// const myarr1 = arr2.splice(2, 6)
// console.log("C",myarr1)
// console.log("Original Array", arr2);

const marvel_heros = ["Iron Man", "Thor", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel.push(dc)
// console.log(marvel)

// console.log(marvel[3][0])
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);
// const another_array = [1,2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const usable_array = another_array.flat(Infinity)
// console.log(usable_array);

// suppose the data came from the website is in the form of String and any other than array... then you can use 
console.log(Array.isArray("Bhavesh"))
console.log(Array.from({name : "Bhavesh"}))

let score1 = 100
let score2 = 200

let score3 = 300 
console.log(Array.of(score1, score2, score3))
