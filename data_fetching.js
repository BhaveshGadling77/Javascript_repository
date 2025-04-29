// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// // const newNums = myNums.map( (x) => x + 10)

// let newNums = myNums
//                     .map( (nums) => nums * 10) 
//                     .map( (nums) => nums + 1)
//                     .filter( nums => nums > 40)


// console.log(newNums)

//reduce method in javascript 
const myNums = [1, 2, 3]

const total = myNums.reduce( (acc, currval) => {
    console.log(`acc is ${acc} currval is ${currval}`)
    return acc + currval}, 3 ) 

console.log(total)


const shoppingCart = [
    {
        itemName : "Js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    }, {
        itemName : "mobile dev course",
        price : 5999
    }, {
        itemName : "data scientist course",
        price : 12999
    }
]
console.log( shoppingCart.reduce( ( acc, item) => {
    return item.price + acc
}, 0))