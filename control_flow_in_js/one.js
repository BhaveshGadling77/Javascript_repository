//if statement
if (true) {
    console.log("This is an additional log statement");
}

//scope 
//comman notation of writing if statement for one line is

/* you  can also write if statement like this */
let a = 10;
if (a > 9) console.log("This is an additional log statement"),
console.log("test2");
// but this is not a good practice
// because it is not readable
// so we should write like this
if (a > 9) {
    console.log("This is an additional log statement");
    console.log("test2");
}
// nested if statement
let b = 20;
if (a > 9) {
    console.log("This is an additional log statement");
    if (b > 19) {
        console.log("This is an additional log statement");
    }
}