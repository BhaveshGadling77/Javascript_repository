// const teacher = {
//     makevideo : true
// }
// const teacherSupport = {
//     Available : false
// }
// const User1 = {
//     name:"Chai", 
//     email : "chai@google.com"
// }
// const TASupport = {
//     makeAssignment: false, 
//     fullTime: true, 
//     __proto__: teacherSupport
// }

// // teacher.__proto__ = User;

// // //modern syntax of getting prototype of it.
// // Object.setPrototypeOf(teacherSupport, teacher);
// let anotherUsername = "Bhavesh          "
// String.prototype.trueLength = function() {
//     // console.log(`${this}`)
//     // console.log(`${this.name}`)
//     console.log(`The Truelength is ${this.trim().length}`)
// }
// "mummy".trueLength()
// console.log(anotherUsername.trueLength())   



//inheritance in js
class User{
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`The username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        //super keyword use the to change the username of it
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`New course was added ${this.username}`)
    }
}

const bhai = new Teacher('helloworld', 'helloworld@gmail.com', 'Hellno@434');
    bhai.addCourse();

const masala = new User('Hello');
masala.logMe();
