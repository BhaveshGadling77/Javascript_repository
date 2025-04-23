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
console.log(person.age)
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
console.log(sercretiveObject.interrogate())
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
console.log(randomSource.getNumber())