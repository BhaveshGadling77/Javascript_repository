// function sayMyName() {
//     console.log("Bhavesh")
// }
// sayMyName()

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2)
// }

// addTwoNumber(1,3)


// function addTwoNumber1(num1, num2) {
//     return(num1 + num2)
// }
// const result = addTwoNumber1(4, 4)
// console.log("Result : ", result);

// function loginUserMessage(username = "Bhavesh") {
//     if (!username) {
//         console.log("Please enter a user name")
//         return 
//     } else 
//     return `${username} is just logged in!.`
// }

// console.log(loginUserMessage())


// function calculateCartPrice(...num1) {
//     return num1
// }
// console.log(calculateCartPrice(200, 300, 500, 600))

// //Handling Object
// const user = {
//     username: "Bhavesh",
//     price: 200
// }
// function handleObject(anyobject) {
//     console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`)

// }
// handleObject(user)
// const roundTo = (n, step) => {
//     let remainder = n % step;
//     return n - remainder + (remainder < step / 2 ? 0 : step);
//     };
// console.log(roundTo(4, 2))

// function findSolution(target) {
//     function find(current, history) {
//     if (current == target) {
//     return history;
//     } else if (current > target) {
//     return null;
//     } else {
//     return find(current + 5, `(${history} + 5)`) ??
//     find(current * 3, `(${history} * 3)`);
//     }
//     }
//     return find(1, "1");
// }
// console.log(findSolution(15));
// const current = 1
// const history = "1"
// console.log(current == history)

// addtwo(2)
// const addtwo = (x)  => {
//     return x + 2
// }
// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//     action(i);
//     }
//     }

// function unless(test, then) {
//     if (!test) then();
//     }
// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is even");
// });
// });
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
    mapped.push(transform(element));
    }
    return mapped;
    }
    let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
    console.log(map(rtlScripts, s => s.name));
    