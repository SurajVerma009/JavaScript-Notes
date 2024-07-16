// Day 3 : Control Structures

// Task/Activities : 

// Activity 1 : If-Else Statements

// Task 1 : Write a program to check if a number is positive,negative,or zero,and log the result to the console.

// Task 2 : Write a program to check if a person is eligible to vote (age>=18) and log the result to the console.


// Task 1 Solution : 

let a = "2"
if (a > 0) {
    console.log(a + " is a positive number");     // --> 2 is a positive number
}
else if (a < 0) {
    console.log(a + " is a negative number");
}
else if (a == 0) {
    console.log("This is zero");
}
else {
    console.log(a + " not a number");
}


// Task 2 Solution : 

const person = 17

const eligibleAge = 18

if (person >= eligibleAge) {
    console.log("You can vote");
} else {
    console.log("You can not vote");     // --> You can not vote
}


// *************************************************************************************

// Activity 2 : Nested If-Else Statements 

// Task 3 : Write a program to find the largest of three numbers using nested if-else statements


// Task 3 Solution : 

let num1 = 2

let num2 = 5

let num3 = 5

if (num1 == num2 && num2 == num3) {
    console.log("All numbers are the same");
} else if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} is the largest`);
} else {
    console.log(`${num3} is the largest`);
}


// *************************************************************************************

// Activity 3 : Switch Case

// Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

// Task 5 : Write a program that uses a switch case to assign a grade ("A","B","C","D","F") based on a score and log the grade to the console.

// Task 4 Solution : 

let dayNumber = 6

switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Incorrect day number");
}


// Task 5 Solution : 

let mathScore = 63;
let physicsScore = 72;
let chemistryScore = 60;
let englishScore = 73;
let sanskritScore = 65;

let totalScore = mathScore + physicsScore + chemistryScore + englishScore + sanskritScore;
let maxScore = 500;
let result = (totalScore * 100) / maxScore;
let grade;

switch (true) {
    case (result < 50):
        grade = 'F';
        break;
    case (result >= 50 && result < 60):
        grade = 'D';
        break;
    case (result >= 60 && result < 70):
        grade = 'C';
        break;
    case (result >= 70 && result < 80):
        grade = 'B';
        break;
    case (result >= 80):
        grade = 'A';
        break;
    default:
        grade = 'Invalid score';
}

console.log(`result = ${result} and your grade is ${grade}`);


// ***********************************************************************************

// Activity 4 : Conditional (Ternary) Operator

// Task 6 : Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.


// Task 6 Solution : 

let number = 5

number % 2 == 0 ? console.log(`${number} is even`) : console.log(`${number} is odd`);


// *************************************************************************************

// Activity 5 : Combining Conditions

// Task 7 : Write a program to check if a year is a leap year using multiple condition(divisible by 4,but not 100 unless also divisible by 400) and log the result to the console.


// Task 7 Solution :

let year = 1900;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}