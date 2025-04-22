import SCRIPTS from './scripts.js'

const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened);
// [[1, 2], [3, 4], [5, 6]] --> [1, 2, 3, 4, 5, 6]
 
// Q2
function loop(val, testFunction, updateFunction, bodyFunction) {
    for(let start = val; testFunction(start); start = updateFunction(start)) {
        bodyFunction(start)
    }
}
let x = 1
loop(x, x => (x <= 5), x => ( x + 1), console.log)

//Q3
let array = [1, 2, 3, 4, 5]
// writing every1
function every1(array, func){
    for (let value in array) {
       check = func(value)
       if(!check)
        return false
    }
    return true
}

//using some
// take an array then break an array into small part of one element and then check that one element array store the result and then check for each iteration if false appear return false

function every2(array, funct) {
    let i = 0
    let arr = []
    while (i < array.length) {
        arr.push(array[i])
        if (!(arr.some(funct)))
            return false
        arr.pop()
        i++;
    }
    return true
}
console.log(every2(array, n => (n < 5)))

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;})) {
            return script;
        }
    }
    return null;
}
characterScript(65)

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.find(c => c.name == name);
        if (!known) {
            counts.push({name, count: 1});
        } else {
            known.count++;
        }
    }
    return counts;
}
countBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? "even" : "odd");

