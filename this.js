const user = {
    username : "Bhavesh",
    price: 999,
    welcome: function() {
        console.log(`Hi ${this.username}, welcome to website`)
        console.log(this);
    }
}
// user.welcome()
// user.username = "Anay"
// user.welcome()

// console.log(this)
function chai() {
    let username = "hitesh"
    console.log(this.username)
}// chai()

// const addtwoNum = (num1, num2) => num1 + num2
const addtwoNum = (num1, num2) => (num1 + num2) // for returning values
const returnObject = () => ({username : "Bhavesh"})
// returnObjedt() 
console.log(returnObject);
