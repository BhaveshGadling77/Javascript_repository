// let score = "33"
// score = Number(score)
// console.log(typeof(score))

// let score1 = Number(score)
// console.log(score1)

// console.log(typeof(score1))
// let booleancheck = "0"
// booleancheck = Boolean(booleancheck)
// console.log(booleancheck)
/* Operations */

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 ** 3) // 2* n
// console.log(2 % 2)

let str1 = "Hello"
let str2 = " Bhavesh"
let str3 = str1 + str2
// console.log(str3);

// console.log(2 + "1")
// console.log("2" + 1)
// console.log("1" + 2 + 2)
// console.log(3 + 4 * 5 % 2)
// console.log(null > 0);
// console.log(null >= 0);
// console.log(null <= 0)
// console.log(null < 0)
// console.log(null == 0)
//Memory in Js
//stack (primitive) , Heap (non- primitive)
let myName = "Bhavesh"
let anotherName = myName
anotherName ="Bhavesh Gadling"
// console.log(myName)
// console.log(anotherName)

let userOne = {
    email: "User@gmail.com",
    upi:"user@ybl"
}
let userTwo = userOne;
userTwo.email = "Bhavesh@google.com"
// console.log(userOne.email)
// console.log(userTwo.email)

//string 
const name = "Bhavesh"
const repoCount = 3
console.log(name+repoCount)
console.log(`Hello my name is ${name} and i am having ${repoCount} repos on github`)
const gameName = new String ("My name is bhavesh gadling")
console.log(gameName[0])
console.log(gameName.__proto__) // for the whole string 
console.log(gameName.charAt(0))// gives the character at index and if you entered index > strlength or index < 0 then it will result nothing
console.log(gameName.indexOf('h')) //gives the index of the first matching character
console.log(gameName.lastIndexOf(gameName)) 

const newString = gameName.substring(0, 5) //divide whole sting into parts and return it negative indexing is not handled
console.log(newString);
const anotherstring = gameName.slice(0,4)// divide whole string from 0 to 4 negative indexing is handled
console.log(anotherstring)
const newStringone = "      Bhavesh      "
console.log(newStringone.trim()) //trim the string from end and start and only remove ' ' , '\n' chars from string

const url = "https://bhavesh.com/bhavesh%20Gadling"
console.log(url.replace('%20', '-')) // replace only first matching characters of string and other than first char the string remains unchanged

console.log(url.includes('h'))// returns true or false if 'h' is in string or not.

console.log(gameName.split(' '))// split string on the basis of space or any other character u had given in '' 

