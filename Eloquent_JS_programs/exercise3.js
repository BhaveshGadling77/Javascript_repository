/* Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to and including end. 
*/
const range = (x, y) => {
    let arr = []
    arr.push(x)
    while (x < y) {
        x += 1
        arr.push(x)
    }
    return arr
}
/* Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55*/
const sum = (arr) => {
    let i = 0,sum = 0
   while(i < arr.length) {
      sum += arr[i]
        i++
    }
    return sum
}

// console.log(sum(range(1, 10)))

/* As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements should go up by increments of one, corresponding
to the old behavior. The function call range(1, 10, 2) should return [1,
3, 5, 7, 9]. Make sure this also works with negative step values so that
range(5, 2, -1) produces [5, 4, 3, 2].*/

const range1 = (lowerLimit, upperLimit, step = 1) => {
    let arr = []

    if (lowerLimit > upperLimit) {
        let temp = lowerLimit
        lowerLimit = upperLimit
        upperLimit = temp
    }
    
    while (lowerLimit < upperLimit) {
        arr.push(lowerLimit)
        lowerLimit += step
    }
    return arr
}
// console.log(range1(5, 2, -2))
/* Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. The first, reverseArray, should take an array as its
argument and produce a new array that has the same elements in the inverse
order.*/
const reverseArray = (arr) => {
    let i = arr.length - 1
    let newarr = []
    while (i >= 0) {
        newarr.push(arr[i])
        i--;
    }
    return newarr
}
// console.log(reverseArray([1, 2, 3, 4, 5, 6]))

/* The second, reverseArrayInPlace, should do what the reverse method
does: modify the array given as its argument by reversing its elements. Neither
may use the standard reverse method*/
const reverseArrayInPlace = (arr) => {
    let i = arr.length - 1, j
    let newarr = []
    while (i >= 0) {
        newarr.push(arr[i])
        i--;
    
    }
    i = arr.length - 1
    j = 0
    while (j < i) { 
        arr[j] = newarr[j]
        j++
    }
    return arr
}
// console.log(reverseArrayInPlace(arr = [1, 2, 3, 4,5 , 6]));

// /* 1 -> 2 -> 3 -> null
//  Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument */
//     function arrayToList(arr) {
//         let list = null;
//         for (let i = arr.length - 1; i >= 0; i--) {
//             list = {
//                 value: arr[i],
//                 rest: list
//             };
//         }
//         return list;
//     }

// console.log(list = arrayToList([1, 2, 3]))

// /* do it reverse */
// function listToArray(list) {
//     let arr = []
//     console.log(list)
//     while(list){
//         arr.push(list.value)
//         list = list.rest   
//     }

//     return arr
// }
// console.log(listToArray(list = arrayToList([1, 2, 3])))

// function prepond(num, list) {
    
// }
// function nth(list, n) {
//     if (!list) {
//         return undefined
//     } else if (0 == n)
//         return list.value
//     return nth(list.rest, n -1)

// }
// console.log(nth(3, list = arrayToList([1, 2, 3, 4, 5])));
// console.log(list);

function deepEqual(val1, val2) {
    if (typeof val1 == typeof val2)
        if (val1 == val2)
        return "They are equal"
        else 
            return "They are not equal"
    else 
    return "They are not equal"
}

console.log(deepEqual(null, [1, 2, 4]));

