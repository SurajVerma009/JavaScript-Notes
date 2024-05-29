let myArr = new Array(11,22,33,44,55);

// console.log(myArr.length);    // ==> 5

// console.log(myArr[2]);     // ==> 33  (Array index start with zero)


// myArr.push(66);

// console.log(myArr);   // ==> [ 11, 22, 33, 44, 55, 66 ]  (Push new element at the end)

// myArr.pop();

// console.log(myArr);    // ==> [ 11, 22, 33, 44, 55 ]  (Remove the  last element )


// ----------------------------------------------------------------------------------------

let newArr = new Array("Shaktiman", "Goga","Doremon");

// console.log(newArr);    // ==> [ 'Shaktiman', 'Goga','Doremon' ]

// newArr.unshift("Pokemon");

// console.log(newArr);     // ==> [ 'Pokemon', 'Shaktiman', 'Goga','Doremon' ] (Add new element at the beginning of an array)

newArr.shift();

// console.log(newArr);   // ==> [ 'Shaktiman', 'Goga','Doremon' ]  (Remove the first element )



// ----------------------------------------------------------------------------------------

let arr = new Array(1,2,3,4,5);

// let arr2 = arr.join();   // ==> Converts all the elements of an array into a string, separated by the specified separator string.

// console.log(arr2);   // ==> 1,2,3,4,5  (default separator (,))

let arr2 = arr.join('-');

// console.log(arr2);   // ==> 1-2-3-4-5

// console.log(typeof arr2);  // ==> string


// ----------------------------------------------------------------------------------------

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object , slice() does not modify the original array  it returns a new array. 

let anotherArray = [0,1,2,3,4,5,6];

let newStore =  anotherArray.slice(1,3)

// console.log(newStore);       // ==> [ 1, 2 ]


// The splice() method of Array instances changes the contents of originol array by removing or replacing existing elements and/or adding new elements in place

// splice(start, deleteCount)

// splice(start, deleteCount, item1, item2, /* …, */ itemN)

anotherArray.splice(1,3);

// console.log(anotherArray);   // ==> [ 0, 4, 5, 6 ]


// -------------------------------------------------------------------------------------

let Hero = ["Salman","Shahrukh","Aamir"];

let heroine = ["Katrina","Kareena","Priyanka"];


// Hero.push(heroine);

// // console.log(Hero);    // ==> [ 'Salman', 'Shahrukh', 'Aamir', [ 'Katrina', 'Kareena', 'Priyanka' ] ]

// console.log(Hero[3][1]);    // ==> Kareena

// let bollywoodStar = Hero.concat(heroine)

// console.log(bollywoodStar);   // ==> [ 'Salman', 'Shahrukh', 'Aamir', 'Katrina', 'Kareena', 'Priyanka' ]  {better than push()}


let allBollywoodStar = [...Hero,...heroine]  // ==> spread operator(...)

// console.log(allBollywoodStar);  // ==> [ 'Salman', 'Shahrukh', 'Aamir', 'Katrina', 'Kareena', 'Priyanka' ]  {better than concat() bacuase he is  more concise and readable manner.}


// -------------------------------------------------------------------------------------------

let newArray = [1,2,3,[4,5,6,["suraj","hero",]],7,8]


// console.log(newArray.flat(Infinity));   // ==> [ 1, 2, 3, 4, 5, 6, 'suraj', 'hero', 7, 8 ]

// console.log(newArray.flat());   // ==> [ 1, 2, 3, 4, 5, 6, [ 'suraj', 'hero' ], 7, 8 ] (default one depth)

 
// console.log(newArray.flat(2));    // ==> [ 1, 2, 3, 4, 5, 6, 'suraj', 'hero', 7, 8 ]



//----------------------------------------------------------------------------------------------

/*  Array.isArray() static method determines whether the passed value is an Array.
when we dont know the value comes from any other resource are array or not then we check or ask  by using Array.isArray() static method
*/

// console.log(Array.isArray(["Good",true]));  // ==> true

// console.log(Array.isArray("hello"));  // ==> false

// console.log(Array.isArray(["hello"]));  // ==> true

// console.log(Array.isArray([""]));   // ==> true


// ------------------------------------------------------------------------------------------

// when we want convert any value in array then use Array.from() and Array.of() method

// console.log(Array.from("Suraj"));  // ==> [ 'S', 'u', 'r', 'a', 'j' ]

// console.log(Array.from("121"));   // ==> [ '1', '2', '1' ]

// console.log(Array.from([true]));   // ==> [ true ]

let str = "mahesh"

// console.log(str.split());    // ==> [ 'mahesh' ]


let score1 = 100;

let score2 = 200;

let score3 = 300;

// console.log(Array.of(score1,score2,score3));   // ==> [ 100, 200, 300 ]

// console.log(Array.of("suraj"));  // ==> ["suraj"]


// Notice that the Array.of() method accept multiple values and convert into array element

//  Array.from() methods accept only 2 arguments (iterable object and map function)

// console.log(Array.from("Suraj", char => char.toUpperCase()));  // ==> [ 'S', 'U', 'R', 'A', 'J' ]

// char => char.toUpperCase() --> Map Function