// console.log(Math.abs(-22));   // ==> 22 (Only change negative value in positive)

// console.log(Math.round(22.899999));   // ==> 23

// console.log(Math.round(22.399999));   // ==> 22

// console.log(Math.floor(22.8));     // ==> 22

// console.log(Math.ceil(22.2));     // ==> 23

// console.log(Math.min(10,8,90,22));   // ==> 8

// console.log(Math.max(10,8,90,22));   // ==> 90

// console.log(Math.pow(2,3));     // ==> 8

// console.log(Math.sqrt(25));      // ==> 5

// console.log(Math.PI);    // ==> 3.141592653589793

// ---------------------------------------------------------------------------------

// Math.random() generate the random number between 0 to 1

// console.log(Math.random());    // ==> 0.05379415083202721  (Every time new random number)



// If you want a random number between 1 to 9 then multiply 10

// console.log(Math.random()*10);   // ==> 2.290475228231741



// Sometimes a random number is 0.05379415083202721 and you multiply 10 but the result is 0.... something  , so you add one

// console.log((Math.random()*10) + 1);   // ==> 5.365216271142749


// use floor 

// console.log(Math.floor((Math.random()*10) + 1));   // ==> 9



const minValue = 10;
const maxValue = 50;

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);

// This formula always genarate random number between 10 to 50 