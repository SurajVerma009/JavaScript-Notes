// console.log("2" > 2);      // ==> false
// console.log("2" < 2);      // ==> false
// console.log("2" == 2);     // ==> true
// console.log("2" === 2);    // ==> false

console.log(null > 0);      // ==> false
console.log(null == 0);     // ==> false
console.log(null >= 0);     // ==> true


// You notice that (null >= 0) is true , the reason is  --> In JavaScript equality check (==) and comparisions check (>,<,>=,<=) work differently . Comparision convert null into zero . 