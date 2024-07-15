// Day 2 : Operators

// Tasks/Activities : 

// Activity 1 : Arithmetic Operations

// Task 1 : Write a program to add two numbers and log the result to the console.

// Task 2 : Write a program to subtract two numbers and log the result to the console.

// Task 3 : Write a program to multiply two numbers and log the result to the connsole.

// Task 4 : Write a program to divide two numbers and log the result to the connsole.

// Task 5 : Write a program to find the remainder when on number is divided by another and log the result to the console.


// Task 1 Solution : 

let num1 = 22;
let num2 = 11;

let add = num1 + num2;

console.log("Sum = ", add);    // --> 33


// Task 2 Solution :

let subtract = num1 - num2

console.log("Subtract = ", subtract);   // --> 11


// Task 3 Solution  : 

let multiply = num1 * num2

console.log("Multiply", multiply);   // --> 242


// Task 4 Solution : 

let divide = num1 / num2

console.log("Divide = ", divide);    // --> 2


// Task 5 Solution : 

let remainder = num1 % num2

console.log("Remainder", remainder);    // --> 0


// ************************************************************************************

// Activity 2 : Assignment Operators

// Task 6 : Use the += operator to add a number to a variable and log the result to the console.

// Task 7 : Use the -= operator to subtract a number from a variable and log the result to the console.


// Task 6 Solution : 

let number = 7;

number += 4

console.log(number);       // --> 11


// Task 7 Solution : 

let number2 = 221

number2 -= 2

console.log(number2);     // --> 219


//  ************************************************************************************

// Activity 3 : Comparison Operators

// Task 8 : Write a program to compare two numbers using > and < and log the result to the console.

// Task 9 : Write a program to compare two numbers using >= and <= and log the result to the console.

// Task 10 : Write a program to compare two numbers using == and === and log the result to the console.


// Task 8 Solution : 

let variable1 = 112

let variable2 = 229

console.log(variable1 > variable2);    // --> false

console.log(variable1 < variable2);    // --> true


// Task 9 solution : 

let anotherVariable1 = 0

let anotherVariable2 = 0

console.log(anotherVariable1 >= anotherVariable2);   // --> true

console.log(anotherVariable1 <= anotherVariable2);   // --> true


// Task 10 Solution : 

console.log(2 == "2");       // --> true

console.log(2 === "2");     // --> false


// ************************************************************************************

// Activity 4 : Logical Operators

// Task 11 : Write a program that uses the && operator to combine two conditions and log the result to the console.

// Task 12 : Write a program that uses the || operator to combine two conditions and log the result to the console.

// // Task 13 : Write a program that uses the ! operator to negate a conditions and log the result to the console.


// Task 11 Solution :

console.log(2 > 0 && 0 < 1);     // --> true


// Task 12 Solution : 

console.log(0 > 0 || 1 > 0);    // --> true


// Task 13 solution : 

console.log(0 != null);   // --> true


// ************************************************************************************

// Activity 5 : Ternary Operator

// Task 14 : Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.


// Task 14 Solution : 

console.log(101 > 0 ? "Number is Positive" : "Number is Negative");  // --> Number is Positive