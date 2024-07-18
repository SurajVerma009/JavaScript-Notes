// Day 5 : Functions

// Task/Activities : 

// Activity 1 : Function DEclaration

// Task 1 : Write a function to check if a number is even or odd and log the result to the console.

// Task 2 : Write a function to calculate the square of a number and return the result.


// Task 1 Solution : 

function evenOdd(number) {
    if (number % 2 == 0) {
        console.log(`${number} is Even`);
    } else {
        console.log(`${number} is Odd`);
    }
}

evenOdd(14);


// Task 2 Solution : 

function square(number) {
    let result = Math.pow(number, 2)
    console.log(`Square of ${number} is ${result}`);
}

square(3);


// **************************************************************************************

// Activity 2 : Function Expression

// Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console.

// Task 4 : Write a function expression to concatenate two strings and return the result.


// Task 3 Solution : 

function max(num1, num2) {

    if (num1 == num2) {
        console.log("Both Number are Same");
    } else {
        let result = Math.max(num1, num2)
        console.log(`${result} is maximum number`);
    }

}

max(0, 0);
max(0, 5)


// Task 4 Solution : 

function concatenateStr(str1, str2) {
    let concateResult = str1.concat(str2)
    console.log(concateResult);
}

concatenateStr("Good", " Morning")


// **************************************************************************************

// Activity 3 : Arrow Function 

// Task 5 : Write an arrow function to calculate the sum of two numbers and return the result.

// Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean value.


// Task 5 Solution :

const sum = (a, b) => {
    let result = a + b
    console.log(result);
}

sum(7, 9)


// Task 6 Solution : 

const specialChar = (str) => {
    let result = str.includes("@")
    console.log(result);
}

specialChar("suraj008@gmail.com")


// ***************************************************************************************

// Activity 4 : Function Parameters and Default Values

// Task 7 : Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

// Task 8 : Write a function that takes a person`s name and age and returns a greeting message.Provide a default value for the age.


// Task 7 Solution : 

function Product(para1, para2 = 4) {
    let result = para1 * para2
    console.log(`${para1} and ${para2} product is ${result}`);
}

Product(7)
Product(5, 7)


// Task 8 Solution : 

function person(name, age = 21) {
    function greeting() {
        console.log(`Hello ${name} your age is ${age}`);
    }
    greeting();
}

person("Suraj")
person("Raju", 28)


// ****************************************************************************************

// Activity 5 : Higher-Order Functions

// Task 9 : Write a higher-order function that takes a function and a number, and calls the function that many times.

// Task 10 : Write a higher-order function that takes two functions and a value, applies the first function to the value,and then applies the second function to the result.


// Task 9 Solution : 

function highOrder(fn, num) {
    for (let i = 1; i <= num; i++) {
        fn();
    }
}

function sayName() {
    console.log("Suraj Verma");
}

highOrder(sayName, 5)


// Task 10 Solution : 

function highOrder2(fn1, fn2, value) {
    let result = fn1(value);
    fn2(result);
}

function first(x) {
    let result = x + 2
    return result;
}

function second(x) {
    let lastResult = x * 5
    console.log(lastResult);
}

highOrder2(first, second, 9)