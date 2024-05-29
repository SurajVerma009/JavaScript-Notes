/* Question ye h ki kya hm Math.PI ki value ko overwrite or change kr sakte hai aur agar nhi kr sakte h to kyo nhi kr sakte */


// console.log(Math.PI);  // ==> 3.141592653589793

Math.PI = 4

// console.log(Math.PI);   // ==> 3.141592653589793

// Notice that the value does not change

// Reason are :  value of writable are false 

const PI = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(PI);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false      
}
*/


// Hm bhi ye property apne object ko de sakte h 


let myObj={
    name:"Suraj",
    email:"suraj@gmail.com"
}

Object.defineProperty(myObj,"name",{
    writable: false
})

myObj.name = "Mahesh"

console.log(myObj.name);   // ==> Suraj

let obj = Object.getOwnPropertyDescriptor(myObj,"name")

console.log(obj);