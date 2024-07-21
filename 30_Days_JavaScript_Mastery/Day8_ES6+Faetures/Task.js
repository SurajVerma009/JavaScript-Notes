// Day 8 : ES6 + FEATURES

// Task/Activities : 

// Activity 1 : Template Literals

// Task 1 : Use template literals to create a string that includes variables for a person`s name and age, and log the string to the console.

// Task 2 : Create a multi-line string using template literals and log it to the console.


// Task 1 Solution : 

let Name = "Suraj Verma"

let age = 23

console.log(`My Name is ${Name} and my age is ${age}`);


// Task 2 Solution : 

console.log(`Hello my name is "${Name}" and i am a student from BCA in Jeevandeep. I love coding and playing cricket`);


// ***************************************************************************************

// Activity 2 : Destructuring

// Task 3 : Use array Destructuring to extract the first and second elements from an array of numbers and log them to the console.

// Task 4 : Use object destructuring to extract the title and author from a book object and log them to the console.


// Task 3 Solution : 

const numbers = [10, 20, 30, 40]

const [first, second] = numbers

console.log(first);

console.log(second);


// Task 4 Solution : 

let books = {
    title: "1984",
    author: "George Orwell"
}

const { title, author } = books

console.log(title);
console.log(author);



// *****************************************************************************************

// Activity 3 : Spread and Rest Operaters

// Task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

// Task 6 : Use the rest operator in a function to accept an arbitrary number of argumets, sum them and return the result.


// Task 5 Solution : 

let firstArr = [1, 2, 3, 4, 5]

let resultArr = [...firstArr, 6, 7, 8, 9]

console.log(resultArr);


// Task 6 Solution :


let result = 0

function sum(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        result = result + numbers[i]
    }
    console.log(result);
}

sum(1, 2, 3)


// ******************************************************************************************

// Activity 4 : Default Parameters

// Task 7 : Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.


// Task 7 Solution : 

function some(num1, num2 = 1) {
    console.log(num1 * num2);
}

some(5)
some(3, 4)


// ******************************************************************************************

// Activity 5 : Enhanced Object Literals


// Task 8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.


// Task 9 : Create an object with computed property names based on variable and log the object to the console.


// Task 8 Solution : 

const name = "Alice";
const Age = 30;

function greet() {
    return `Hello, my name is ${this.name} and I am ${this.Age} years old.`;
}

const person = {
    name,
    Age,
    greet
};

console.log(person);
console.log(person.greet());


// Task 9 Solution : 

const propName = "dynamicKey";

const obj = {
    [propName]: "This is a dynamic value"
};

console.log(obj); 