const arr = ["JS","Py","Cpp","Java"];

const language = arr.forEach( function (item) {
    // console.log(item);
})    

// console.log(language);   // ==> undefined


//  forEach mathod returs nothing 

// So filter method  we are use because filter returns value

let language2 = arr.filter (function (lang) {
    return lang
})

// console.log(language2);  // ==> [ 'JS', 'Py', 'Cpp', 'Java' ]


const myArr = [1,2,3,4,5,6,7,8];

let number = myArr.filter( (num) => {
    return num>4
})

// console.log(number);  // ==> [ 5, 6, 7, 8 ]


//  -------------------------------------------------------------


const num = [1,2,3,4,5];

let newnums =num.map( (nums) => nums + 10)

// console.log(newnums);   // ==> [ 11, 12, 13, 14, 15 ]

/*
Toh, array.filter() se hum kisi shart ke hisab se elements ko select kar sakte hain, jabki array.map() se hum har element par ek operation apply kar sakte hain aur ek naya array bana sakte hain jo un operations ke nateeje se banta hai.


array.filter(): Ye ek naya array banata hai jismein sirf un elements ko shamil kiya jata hai jo diye gaye function ke dwara di gayi sharten puri karte hain. Ismein mool array ke elements me se kuch select kiye jaate hain aur naye array me unhi ko shamil kiya jata hai jo di gayi sharten puri karte hain.


*/


// ------------------- Channing ----------------------------------

//  Channing means multiple method perform 

const myNum = [1,2,3,4,5,6,7,8,9];

const newNum = myNum
              .map( (num) => num * 100)
              .map( (num) => num + 1)
              .filter( (num) => num >=400)

// console.log(newNum);  // ==> [ 401, 501, 601, 701, 801, 901 ]




// --------------------------------------------------------------

/*
The reduce method in JavaScript is used to iterate over an array and reduce it to a single value. It takes two arguments: a callback function and an initial value for the accumulator. The callback function itself takes two arguments: the accumulator (often abbreviated as acc) and the current element of the array.
*/



const myArray = [
    {
        course : "JavaScript",
        price : 499
    },
    {
        course : "Python",
        price : 699
    },
    {
        course : "Cpp",
        price : 399
    },
    {
        course : "Java",
        price : 899
    }
]

let newArray = myArray.reduce(function (acc,course) {
    return acc + course.price
},0);

// console.log(newArray);  // ==> 2496




const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
