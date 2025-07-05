const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI") // give some hidden property
// console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price : 250,
    isAvailable : true,
    OrderChai : function() {
        console.log("Chai not made !") 
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai,'name', {
    writable:false, 
    enumerable: false,
    // configurable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai )) {
    if (typeof value !== 'function') 
        console.log(`${key} : ${value}`) 
}