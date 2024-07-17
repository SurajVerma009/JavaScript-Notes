// Day 4 : Loops

// Task/Activities : 

// Activity 1 : For Loop

// Task 1 : Write a program to print numbers from 1 to 10 using a for loop.

// Task 2 : Write a program to print the multiplication table of 5 using a for loop.


// Task 1 Solution : 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2 Solution : 

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
}


// ******************************************************************************************

// Activity 2 : While Loop

// Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

// Task 4 : Write a program to print numbers from 10 to 1 using a while loop.


// Task 3 Solution : 

let i = 0;
let sum = 0;

while (i <= 10) {
    sum = sum + i
    i++;
}

console.log(sum);


// Task 4 Solution : 

let number = 10

while (number >= 1) {
    console.log(number);
    number--;
}


// *********************************************************************************************

// Activity 3 : Do...While Loop

// Task 5 : Write a program to print numbers from 1 to 5 using a do...while loop.

// Task 6 : Write a program to calculate the factorial of a number using a do...while loop.


// Task 5 Solution :


let countNumber = 1

do {
    console.log(countNumber);
    countNumber++;
} while (countNumber <= 5);


// Task 6 Solution : 

let factoNumber = 5;

let factorial = 1

let count = 1

do {
    factorial = factorial * count
    count++;
} while (count <= factoNumber);

console.log(`Factorial of ${factoNumber} is ${factorial}`);


// ***************************************************************************************

// Activity 4 : Nested Loops

// Task 7 : Write a program to print a pattern using nested for loops : 

/*

*
* *
* * *
* * * *
* * * * *

*/


// Task 7 Solution

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}


// *****************************************************************************************

// Activity 5 : Loop Control Statements

// Task 8 : Write a program to print numbers from 1 to 10,but skip the number 5 using the continue statement.

// Task 9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.


// Task 8 Solution :

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    else {
        console.log(i);
    }
}


// Task 9 Solution : 

for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    else {
        console.log(i);
    }
}