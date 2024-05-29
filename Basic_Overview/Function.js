function sayMyName() {    // ==> function Definition
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()    // ==> function call
/* 
S
U
R
A
J
*/

// ---------------------------------------------------------------

function addNumbers(num1, num2) {   // ==> parameter (num1 , num2)
    return num1 + num2
}

// let result = addNumbers(11,11)  // ==> arguments (11,11)

// console.log(result);   // ==> 22


// -----------------------------------------------------------------


function something() {
    return 2 + 3
    console.log("Hello Bhai");
}

// console.log(something());  // ==> 5

// Notice that this line  console.log("Hello Bhai") are not executed because after the return keyword line no one other next line executed



function something() {
    console.log("Hello Bhai");
    return 2 + 3
}

// console.log(something());  
/* ==> Hello Bhai
5*/



// ----------------------------------------------------------------

function userLoggedIn(username) {
    return `${username} is just logged in`;
}

// console.log(userLoggedIn());  // ==> undefined is just logged in

// console.log(userLoggedIn("Suraj"));  // ==> Suraj is just logged in


// --------------------------------------------------------------


function userMultipleArgument1(num1) {
    return num1
}

// console.log(userMultipleArgument1(100,200,300,400));  // ==> 100


function userMultipleArgument2(...num1) {   // ==> Rest Operator
    return num1
}

console.log(userMultipleArgument2(100,200,300,400));  
// ==> [ 100, 200, 300, 400 ]


// -------------- Function with object ---------------------------

// First Way

const userData = {
    userName: "Hardik",
    price: 1999
}

function takeObject(anyObject) {
    return `User is ${anyObject.userName} and Price is "${anyObject.price}" `
}

// console.log(takeObject(userData)); 
//  ==> User is Hardik and Price is "1999" 


//  Second Way


// console.log(takeObject({ userName: "Hardik2", price: 199 }));

// User is Hardik2 and Price is "199" 


// ------------ Function With Array -------------------------------


let myArray = [100,200,true,"Harry"];

function takeArray (anyArray){
    return anyArray[1];
}

// console.log(takeArray(myArray));  // ==> 200


// Second Way 

console.log(takeArray([339,898,"Mahesh"]));  // ==> 898