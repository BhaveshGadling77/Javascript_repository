class User {
    constructor(username) {
        this.username = username
    } 
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    static createId() {
        return `123`
    }
    
}

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
        
    }
}
const bhavesh = new User('bhaveshgadling2025')
// console.log(bhavesh.createId())
const mob = new Teacher('any', 'jeow@gmail.com')

console.log(mob);
