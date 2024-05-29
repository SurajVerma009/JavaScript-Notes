"use strict";  // treat all JS code as newer JS version

// --- Primitive Data Types (call by value , Stack memory) ---

/*

  1--> Number => 123
  2--> BigInt => Large number
  3--> String => ""
  4--> Boolean => True/False
  5--> Undefined
  6--> Null => Stand Alone Value != 0
  7--> Symbol => Unique

*/

// ----- Non-Primitive Data Types (call by reference , Heap memory) ------

/*
   1--> Object
   2--> Array
   3--> Function
*/

// ---------------------- Type Of -----------------------------

const userName = "Suraj Seth";

let userPassword = 11234;

var userEmail = "suraj@google.com";

let userLogged = true;

let userNumber = null;

let userState;

let bignumber = BigInt(1112222222222222222222222222222222222222e22);

console.table([typeof userName,typeof userPassword,typeof userEmail,typeof userLogged,typeof userNumber,typeof bignumber,typeof userState]);

/*

| (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'string'    │
│ 3       │ 'boolean'   │
│ 4       │ 'object'    │
│ 5       │ 'bigint'    │
│ 6       │ 'undefined' │

*/

// Notice That the type of null is 'object' , because of a mistake in the language design . When  JavaScript was created,the typeof null was implemented as "object"

// typeof function() --> function

// typeof Array --> object