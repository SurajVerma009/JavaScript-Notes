/*
Behind the seen in Js Every thing is object and every property of object access for all 
So if you add any extra method or property for object , it is also include for all
But If you Add any extra property to someone , this property are not usable for parent Object

[String,Array,Function] ---> Object --> Null
*/


Object.prototype.heySuraj = function(){
    console.log("Suraj is here...");
}

const myObj = {
    userName : "Suraj",
    email : "suraj@google.com"
}

// myObj.heySuraj()    // ==> Suraj is here...

const Arr = ["Hulk","Thor"];

// Arr.heySuraj()     // ==> Suraj is here...


const myStr = "Something"

// myStr.heySuraj()    // ==> Suraj is here...


// You Notice that Object new Property Accces anyone


// ---------------------------------------------------------------------------

String.prototype.heyHitesh = function(){
    console.log("Chai aur Code here...");
}

let myArr = [1,2,3]

// myArr.heyHitesh()    // ==> error

let obj = {
    userName : "Raju"
}

// obj.heyHitesh()   // ==> error

let str = "Hello"

// str.heyHitesh()    // ==> Chai aur Code here...
