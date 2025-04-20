// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " +
// theNumber * theNumber);\
// number = 0;
// while (number <= 12) {
//     console.log(number);
//     number = number + 2;
//     }
// calculation of 2 ^ 10
// let result = 1;
// let counter = 0;
// while (counter < 10) {
// result = result * 2;
// counter = counter + 1;
// }
// console.log(result);

//do while loop
// let yourName;
// do {
// yourName = prompt("Who are you?");
// } while (!yourName);
// console.log("Hello " + yourName);
//Q1 exercise 1 chp 2
/*let ch = '#'
let res = "";
while(res.length < 7) {
    res += ch;
    console.log(res)
}
*/
//Q2
// let number = 1
// while (number <= 100) {

//     if (number % 3 == 0 && number % 5 == 0) {
//         console.log(number +"FizzBuzz")
//     } else if (number % 3 == 0) {
//         console.log(number+ "Fizz")
//     } else if (number % 5 == 0) {
//         console.log(number+ "Buzz")
//     }
//     number++;
// }

// Q3 
function stringMaker(str1, str2) {

let i = 0
let height = 8
let wid = 8
let res = ""
while (i < height) {
    if (i % 2 == 0)
        res += str1
    else 
        res += str2
    i++
}
    return res
}
let height = 8
let str1 = stringMaker("#", " ")
let str2 = stringMaker(" ", "#")
for (let i = 0; i < height; i++) {
    if (i % 2 == 0)
        console.log(str1)
    else 
        console.log(str2)

}
