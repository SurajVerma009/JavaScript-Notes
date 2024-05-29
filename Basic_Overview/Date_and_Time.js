let myDate = new Date();

// console.log(myDate);   // ==> 2024-04-05T07:10:42.154Z

// console.log(myDate.toDateString());  // ==> Fri Apr 05 2024

// console.log(myDate.toLocaleString());   // ==> 5/4/2024, 12:43:42 pm

// console.log(myDate.toString()); // ==> Fri Apr 05 2024 12:44:24 GMT+0530 (India Standard Time)

// console.log(myDate.getDate());   // ==> 5

// console.log(myDate.getMilliseconds());   // ==> 364



//--------------------------------------------------------------------

let createDate = new Date(2023,0,12);   // ==> yy/mm/dd

// console.log(createDate.toDateString());    // ==> Thu Jan 12 2023


// --> Notice That month index start with zero 


let createDate2 = new Date("01-13-2021");  // ==> mm/dd/yy

// console.log(createDate2.toDateString());   // ==> Wed Jan 13 2021

// --> Notice That month index start with one becausse this is string 


// -------------------------------------------------------------------

// If you want know milisecond till 1 jan 1970 to current date

// console.log(Date.now());  // ==> 1712302019700 milisecond

// console.log(Math.floor(Date.now()/1000));  // ==> 1712303848 second

// console.log(Date.parse("1970,2,1"));   // ==> 2658600000

// --------------------------------------------------------------------

console.log(new Date().toLocaleString('default',{
    weekday :"long",      // ==>  Friday
    year:"numeric"          // ==> 2024
}));
