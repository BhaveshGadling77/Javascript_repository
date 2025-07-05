// const promise1 = new Promise( (resolve, reject) => {
//     //do an async task
//     //db calls, cryptography,network
//     setTimeout(() => {
//         console.log("Async task is completed")
//         resolve()
//     }, 1000);
// });

// promise1.then( () => {
//     console.log("Promise is consumed")
// })
// //connection of then is with resolve

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
        
//         resolve({username:"Bhaveshgadling",
//             email:"Bhavesh"
//         })
//     }, 1000);
// })
// promise2.then( (user) => {
//     console.log(user);
    
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error) {
//             resolve({username: "Bhavesh", password: 124})
//         } else {
//             reject("Error : something went wrong!")
//         }

//     }, 1000)
// })
// promise3.
// then( (user) => {
//     console.log(user);
//     return user.username
    
// })
// .then( (user) => {
//     console.log(user.username);
    
// })
// .catch((err) => {
//      console.log(err);
     
// }).finally( () => {
//     console.log("the Promise is either rejected or either resolved");
    
// })

const promise4 = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({username: "javascript", password: 124})
        } else {
            reject("Error :Js went wrong!")
        }

    }, 1000)
})
async function consumePromise4() {
   
   try {
        const response = await promise4;
        console.log(response);
   } catch (err) {
        console.log(err) 
        console.log("this is getting printed");
        
   } 
}
consumePromise4()

