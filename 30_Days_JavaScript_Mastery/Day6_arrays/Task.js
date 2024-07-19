// Day 6 : Arrays

// Task/Activities : 

// Activity 1 : Array Creation and Access

// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console.

// Task 2 : Access the first and last elements of the array and log them to the console.


// Task 1 Solution : 

const arr = [1, 2, 3, 4, 5]

console.log(arr);


// Task 2 Solution : 

const arr2 = [11, 22, 33, 44, 55]

console.log(arr2[0]);

console.log(arr2[arr2.length - 1]);


// ***************************************************************************************

// Activity 2 : Array Methods (Basic)

// Task 3 : Use the push method to add a new number to the end of the array and log the updated array.

// Task 4 : Use the pop method to remove the last element from the array and log the updated array.

// Task 5 : Use the shift method to remove the first element from the array and log the updated array.

// Task 6 : Use the unshift method to add a new number to the beginning of tha array and log the updated array.


// Task 3 Solution : 

let array1 = [0, 2, 3, 5]

array1.push(9)

console.log(array1);


// Task 4 Solution : 

array1.pop()

console.log(array1);


// Task 5 Solution : 

let array2 = [0, 1, 2, 3, 4, 5, 5]

array2.shift()

console.log(array2);


// Task 6 Solution : 

array2.unshift(11)

console.log(array2);


// *****************************************************************************************

// Activity 3 : Array Methods (Intermediate)

// Task 7 : Use the map method to create a new array where each number is doubled and log the new array.

// Task 8 : Use the filter method to create a new array with only even numbers and log the new array.

// Task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result.


// Task 7 Solution :

let array3 = [1, 2, 3, 4, 5, 6]

let resultOfArray3 = array3.map((num) => num * 2)


// Task 8 Solution : 

let array4 = [1, 2, 3, 4, 5, 6]

let resultOfArray4 = array4.filter((num) => num % 2 == 0)

console.log(resultOfArray4);


// Task 9 Solution : 

let array5 = [1,2,3,4,5]
let initialValue = 0;

let resultOfArray5 = array5.reduce((accumaltor,arr)=>{
    return accumaltor + arr
},0)

console.log(resultOfArray5);


// *****************************************************************************************

// Activity 4 : Array Iteration

// Task 10 : Use a for loop to iterate over the array and log each element to the console.

// Task 11 : Use the forEach method to iterate over the array and log each element to the console.


// Task 10 Solution : 

let anotherArray = [11,22,33,44,55]

for (let i = 0; i < anotherArray.length; i++) {
   console.log(anotherArray[i]);
}


// Task 11 Solution : 

let anotherArray2 = [1,2,3,4,5,6]

anotherArray2.forEach((item)=>console.log(item))


// *****************************************************************************************

// Activity 5 : Multi-dimensional Arrays

// Task 12 : Create a two-dimensional array(matrix) and log the entire array to the console.

// Task 13 : Access and log a specific element from the two-dimensional array.


// Task 13 Solution : 

let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];


console.log(matrix);


// Task 14 Solution : 

let matrix2 = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(matrix2[0][1]);