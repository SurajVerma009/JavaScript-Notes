// Day 1 : Variable and Data Types

// Task/Activities :

// Activity 1 : Variable Declaration

// Task 1 : Declare a variable using var , assign it a number, and log the value to the console.

// Task 2 : Declare a variable using let , assign it a string, and log the value to the console.

// Task 1 Solution :

var myVar = 99

console.log(myVar);      // --> 99

// Task 2 Solution :

let mylet = "Suraj"

console.log(mylet);    // --> Suraj


// ************************************************************************************

// Activity 2 : Constant Declaration

// Task 3 : Declare a variable using const , assign it a boolean value, and log the value to the console.

// Task 3 Solution :

const myConst = true

console.log(myConst);    // --> true


// *************************************************************************************

//  Activity 3 : Data Types

// Task 4 : Create variable of different data types(Number,String,Boolean Object,Array), and log each variables type using the typeof operator.

// Task 4 Solution :

let myNum = 101

let myStr = "Hello"

let myBool = false

let myObj = {
    name: "Suraj",
    rollNo: 101
}

let myArr = [1, 2, "GoodDay", true]

console.table([typeof myNum, typeof myStr, typeof myBool, typeof myObj, typeof myArr])

/* -->
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 'number'  │
│ 1       │ 'string'  │
│ 2       │ 'boolean' │
│ 3       │ 'object'  │
│ 4       │ 'object'  │
└─────────┴───────────┘ */


// **************************************************************************************

//  Activity 4 : Reassigning Variables

// Task 5 : Declare a variable using let, assign it an intial value, reassign a new value, and log both values to the console.

// Task 5 Solution :

let intialValue = 999

{
    intialValue = 1000
    console.log(intialValue);    // --> 1000
}

console.log(intialValue);       // --> 1000


// ***************************************************************************************

//  Activity 5 : Understanding const

// Task 6 : Try reassigning a variable declared with const and observe the error.

// Task 6 Solution : 

const assignFirst = "Mahi"

assignFirst = "Rahul"

console.log(assignFirst);   // --> TypeError: Assignment to constant variable.