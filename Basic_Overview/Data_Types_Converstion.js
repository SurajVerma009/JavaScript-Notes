let number = "33";

let numberConversion = Number(number);

// console.log(numberConversion);        // ==> 33
// console.log(typeof numberConversion); // ==> number

let number2 = "33abc";

let numberConversion2 = Number(number2);

// console.log(numberConversion2);        // ==> NaN
// console.log(typeof numberConversion2); // ==> number

let number3 = null;

let numberConversion3 = Number(number3);

// console.log(numberConversion3);          // ==> 0
// console.log(typeof numberConversion3);   // ==> number

let number4 = undefined;

let numberConversion4 = Number(number4)

// console.log(numberConversion4);        // ==> NaN
// console.log(typeof numberConversion4); // ==> number

let string = "A";

let booleanConversion = Boolean(string);

// console.log(booleanConversion);        // ==> true
// console.log(typeof booleanConversion); // ==> boolean

let string2 = "";

let booleanConversion2 = Boolean(string2);

//  console.log(booleanConversion2);        // ==> false
//  console.log(typeof booleanConversion2); // ==> boolean

let empty = null;

let booleanConversion3 = Boolean(empty);

//  console.log(booleanConversion3);          // ==> false

//  console.log(typeof booleanConversion3);   // ==> boolean

let a = 3;
let b = "4"

let e = 4

let c = b + e + a

console.log(c);    // ==> 443

console.log(typeof c);   // ==> string