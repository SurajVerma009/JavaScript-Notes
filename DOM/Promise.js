/*
Promise ke kuch key concepts hain:

Asynchronous Operations: Promise ko primarily asynchronous operations ko handle karne ke liye istemal kiya jata hai. Yeh network requests, file operations, aur other time-consuming tasks ko manage karne mein help karta hai.

Chaining: Ek promise ko dusre promises ke saath chain kiya ja sakta hai, jisse sequential operations ko handle kiya ja sakta hai. Isme then() aur catch() methods ka use hota hai.

Error Handling: Promise ke saath error handling kaafi straightforward hota hai. Agar koi promise reject hoti hai, toh uska error catch() method ke through handle kiya ja sakta hai.
Promise.all() aur Promise.race(): Promise ke ek aur important feature hai Promise.all() aur Promise.race() methods, jo multiple promises ko ek saath execute karne ya unme se pehli successful/failed promise ko handle karne mein help karte hain.

Promise ka istemal code ko efficient aur readable banata hai, especially jab dealing with multiple asynchronous operations. Yeh ek essential part hai modern JavaScript programming ka.
*/

let promiseOne = new Promise(function (resolve, reject) {
    // setTimeout(() => {
    //     console.log("Async task is completed");
    //     resolve();
    // }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed");
})

// Second Way

new Promise(function (resolve, reject) {
    // setTimeout(()=>{
    //     console.log("Async task2 is completed");
    //     resolve()
    // },1000)
}).then(() => {
    console.log("Promise Consumed 2");
})


// -------------------------------------------------------------------

let promiseTwo = new Promise(function (resolve, reject) {
    // setTimeout(() => {
    //     resolve({ userName: "Suraj", email: "suraj@google.com" })
    // }, 1000)
})

promiseTwo
    .then(function (user) {
        console.log(user);    // ==> { userName: 'Suraj', email: 'suraj@google.com' }
        // console.log(user.userName);  // ==> Suraj
        return user.userName
    })
    .then(function (username) {
        console.log(username);  // ==> Suraj
    })


// ---------------------------------------------------------------------------------

let promiseFour = new Promise(function (resolve, reject) {
    // let error = false;
    // if (!error) {
    //     resolve({ userName: "Hitesh", email: "hitesh@chai.com" })
    // }
    // else {
    //     reject(error)
    // }
})

promiseFour.then(function (user) {
    console.log(user);   // ==> { userName: "Hitesh", email: "hitesh@chai.com" }
}).catch(function () {
    console.log(error);
})

// ----------------------------------------------------------------------

let promiseFourDuplicate = new Promise(function (resolve, reject) {
    let error = true;
    if (!error) {
        resolve({ userName: "Hitesh", email: "hitesh@chai.com" })
    }
    else {
        // reject("Something Went Wrong")
        reject(error)
    }
})

promiseFourDuplicate.then(function (user) {
    console.log(user);  
}).catch(function (error) {
    // console.log(error);   // ==> Something Went Wrong
    console.log(error);   // ==> true
}).finally(function(){
    console.log("The promise is either resolved or reject");
    //==> The promise is either resolved or reject
})