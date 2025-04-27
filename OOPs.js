class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //any number of methods you can define in this
    greet() {
        console.log(`Hello ${this.name} you are age is ${this.age}`)
    }
}
const person = new Person("Bhavesh", 17)
person.greet()
// console.log(person.age)
class SecretiveObject {
    #getSecret() {
    return "I ate all the plums";
    }
    interrogate() {
    let shallISayIt = this.#getSecret();
    return "never";
    }
}
const sercretiveObject = new SecretiveObject()
// console.log(sercretiveObject.interrogate())
class RandomSource {
    #max;
    constructor(max) {
        this.#max = max;
    }
    getNumber() {
        return Math.floor(Math.random() * this.#max);
    }
}
let randomSource = new RandomSource(6)
// console.log(randomSource.getNumber())


//Maps 
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
// console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
// console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
// console.log(ages.has("toString"));
// → false

//Polymorphism


//getter & setters 
let varyingSize = {
    get size() {
      return Math.floor(Math.random() * 100);
    }
  };
  
//   console.log(varyingSize.size); // e.g. → 73
//   console.log(varyingSize.size); // e.g. → 49
class Temperature {
    constructor(celsius) {
    this.celsius = celsius;
    }
    get fahrenheit() {
    return this.celsius * 1.8 + 32;
    }
    set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
    }
    static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
    }
}
let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
console.log(temp.fahrenheit)
