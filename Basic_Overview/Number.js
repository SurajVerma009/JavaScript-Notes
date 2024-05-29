const number = 100;

// console.log(number);

// ---------------------------- create a Number Object -----------------------------------

const anotherNumber = new Number(250);

// console.log(anotherNumber.toFixed(5));  // ==> 250.00000

// console.log(anotherNumber.toFixed(2));  // ==> 250.00


let num1 = 100;

num1 = num1.toString();

// console.log(num1);           // ==> 100

// console.log(typeof num1);   // ==> string

// console.log(num1.length);   // ==> 3

// num1 = num1.toString().replace(100,200);

// console.log(num1);  // ==> 200



let num2 = new Number(22.89);

// console.log(num2.toPrecision(2));        // ==> 23

// console.log(num2.toPrecision(3));       // ==> 22.9

// console.log(num2.toFixed(4));        // ==> 22.890

num2 = num2.toPrecision(1)

// console.log(typeof num2);   // ==> string(precision number ko string me convert kr deta h )

// console.log(num2);   // ==> 2e+1



let num3 = 1000;

// console.log(num3);        // ==> 1000

// console.log(num3.toLocaleString());   // ==> 1,000


let num4 = new Number(1000);

// console.log(num4.toExponential());    // ==> 1e+3  (means 10^3)

console.log(num4.toExponential(2));   // ==> 1.00e+3