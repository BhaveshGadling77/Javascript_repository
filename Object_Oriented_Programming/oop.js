const user = {
    userName : "bhavesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function (){
        // console.log('got user details ')
        // console.log(`userName is ${this.userName}`)
        console.log(this.userName);
        
    }
}

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this;
}
//console.log(user.userName)
//console.log(user.getUserDetails());

const user1 = new User("Bhavesh", 8, true);
const user2 = new User("Gadling", 9, true);
console.log(user1);

