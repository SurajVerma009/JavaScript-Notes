/*
JavaScript me "async" aur "await" keywords, asynchoronous programming ko manage karne ke liye istemal kiye jaate hain. Ye modern JavaScript me Promises ke saath milakar kaam karte hain aur code ko synchronous-like banate hain, jabki behind the scenes asynchronous operations chal rahe hote hain.

"async" keyword ek function ke declaration me istemal hota hai, jo batata hai ki ye function asynchronous hai. Ye function hamesha ek Promise return karta hai. Jab hum async function ko call karte hain, wo ek Promise return karta hai, jo hum await keyword ke saath use kar sakte hain.

"await" keyword ek async function ke andar use hota hai. Ye ek promise ke resolve hone tak code ko rukne ke liye kehta hai. Iska use karte waqt, code execution async function ke baad wait karta hai jab tak Promise resolve na ho jaaye ya reject na ho jaaye. Ye kaam primarily Promises aur async functions ke saath hota hai.
*/

let promiseOne = new Promise(function (resolve, reject) {
    let error = false;

    if (!error) {
        resolve({ userName: "Suraj", address: "Dhanapur" })
    }
    else{
        reject("SomeThing Error")
    }
})

async function promiseOneConsumed(){
    let response = await promiseOne
    // console.log(response);
}

promiseOneConsumed();   // ==> { userName: 'Suraj', address: 'Dhanapur' }



// ------------------------------------------------------------------------------------

async function fetchData() {
    // Ye ek Promise return karega
    let response = await fetch('https://randomuser.me/api/');
    
    // Promise resolve hone ke baad, response ko extract karein
    let data = await response.json();
  
    return data;
  }
  
  // fetchData() ko call karte waqt, humein uski completion ka wait nahi karna padega
  fetchData().then(data => {
    console.log(data);
  }).catch(error => {
    console.error('Error fetching data:', error);
  });
  