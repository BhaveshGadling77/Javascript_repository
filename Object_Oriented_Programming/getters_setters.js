//if you want to give an error when accessing the password then you have use getters and setters 
class User {
    constructor (email, password) {
        this.email = email
        this.password = password
    }
    get password() {
        this.password.toUpperCase() 
    }
    set password(value) {
        this.password = value
    }
 }

const bhavesh = new User('bhavesh@gmail.com', '123');

console.log(bhavesh.password);


