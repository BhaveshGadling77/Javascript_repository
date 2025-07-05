function SetUserName(username) {
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
   // SetUserName(username)   //in this the function don't know what to set
    SetUserName.call(this, username)              //for giving the current context to the function we have to use .call method with argument, this, ..
    this.email = email
    this.password = password
}

const chai = new createUser("bhavesh77", "bhavesh@google.com", "NothingHell")
console.log(chai)
