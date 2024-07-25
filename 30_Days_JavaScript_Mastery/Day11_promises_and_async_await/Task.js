// Day 11 : Promises and Async/Await

// Tasks/Activities :

// Activity 1 : Understanding Promises

// Task 1 : Create a promise that resolve with a message after a 2-second timeout and log the message to the console.

// Task 2 : Create a promise that rejects with an error message after 2-second timeout and handle the error using .catch().


// Task 1 Solution : 

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000)
})

promise.then(() => {
    console.log("Database is Connected");
})


// Task 2 Solution : 

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error Message")
    }, 2000)
})

promise2.catch((error) => {
    console.log(error);
})


// ******************************************************************************************

// Activity 2 : Chaining Promises

// Task 3 : Create a sequence of promises that simulate fetching data from a server.Chain the promise to log messages in a specific order.


// Task 3 Solution : 

function fetchData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Fetched data: ${data}`);
            resolve();
        }, 1000);
    });
}

fetchData('Data 1')
    .then(() => fetchData('Data 2'))
    .then(() => fetchData('Data 3'))
    .then(() => fetchData('Data 4'))
    .then(() => console.log('All data fetched'))
    .catch((error) => {
        console.error('Error fetching data:', error);
    });


// ***************************************************************************************

// Activity 3 : Using Async/Await

// Task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value.

// Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message.


// Task 4 Solution : 

let promise3 = new Promise((resolve) => {
    resolve(2 * 5)
})

async function promiseFun() {
    let data = await promise3

    console.log(data);
}

promiseFun()


// Task 5 Solution : 

async function handlePromise() {
    try {
        let result = await someAsyncFunctionThatMightReject();
        console.log(result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function someAsyncFunctionThatMightReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Something went wrong!'));
        }, 1000);
    });
}

handlePromise();


// ****************************************************************************************

// Activity 4 : Fetching Data from an API

// Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises.

// Task 7 : Use the fetch API to get data from a public API and log the response data to the console using async/await.


// Task 6 Solution : 


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        return response.json();
    })
    .then(data => {

        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });


// Task 7 Solution :

async function fetchData() {

    let response = await fetch('https://randomuser.me/api/');

    let data = await response.json();

    return data;
}

fetchData().then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error fetching data:', error);
});


// ***************************************************************************************

// Activity 5 : Concurrent Promises

// Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values.

// Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises.


// Task 8 Solution : 

const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => resolve('First Promise Resolved'), 1000);
});

const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Second Promise Resolved'), 2000);
});

const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Third Promise Resolved'), 3000);
});


Promise.all([promiseA, promiseB, promiseC])
    .then((values) => {
        console.log(values); // ['First Promise Resolved', 'Second Promise Resolved', 'Third Promise Resolved']
    })
    .catch((error) => {
        console.error('One of the promises rejected:', error);
    });


// Task 9 solution : 


const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => resolve('First Promise Resolved'), 3000);
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Second Promise Resolved'), 2000);
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => reject('Third Promise Rejected'), 1000);
});

Promise.race([promiseOne, promiseTwo, promiseThree])
    .then((value) => {
        console.log('The first promise to settle:', value);
    })
    .catch((error) => {
        console.error('The first promise to settle:', error);
    });
