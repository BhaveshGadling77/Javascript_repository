let heros = ['Hulk', 'Irorman', 'Spiderman']
let myHeros = {
    Hulk : "Muscles",
    Ironman : "Suit",
    Spiderman : "Webshots",
    getSpiderPower :function() {
    console.log(`The SpiderMan has power of ${this.Spiderman}!`);
    }
}

Object.prototype.sayPowers = function() {
    console.log("Every SuperHero has Power!");
}
// myHeros.sayPowers();
Array.prototype.sayName = function() {
    console.log("My Name is Bhavesh Gadling");
}
//  heros.sayPowers();
// heros.sayName();
myHeros.sayName();

//