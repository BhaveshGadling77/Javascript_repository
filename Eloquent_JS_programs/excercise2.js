
//find min of two number as like math.min() function
const min = (x, y) => {
    return x > y ? y: x
}
//console.log(min(4,5))

// find whether a number is even using method other than reminder
const iseven = (n) => {
    if(n < 0)
        return false
    if (n == 1) 
        return false
    else if (n == 0) {
        return true
    }
    return iseven(n - 2)
}

// console.log(iseven(-1))

/*Write a function called countBs that takes a string as its only argument and
 *returns a number that indicates how many uppercase B characters there are in
 *the string. */
const isUpperCase = (str) => {
    return str === str.toUpperCase()
}
const countBs = (str) => {
    let i = 0, count = 0
    while (i < str.length) {
        if(isUpperCase(str[i]))
            count++
        i++
    }
    return count
}

// console.log(countBs("BHavesh"))


/* Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase B characters).
*/
const countChar = (str, ch) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch)
            count++ 
    }
    return count
}

console.log(countChar("Bhavesh", 'h'))