let a = 2;

const b = 5;

var c = 4;

{                    // ==> scope start
    let a = 20;

    const b = 50;

    var c = 40;
}                   // ==> scope end

// console.log("a : ",a);      // ==> a :  2

// console.log("b : ",b);     // ==> b :  5 

// console.log("c : ",c);    // ==> c :  40 

// Notice that the value of c is changed but a and b are not change 


// ---------------------------------------------------------------


function myFun1() {
    const userSurName = "Suraj"

    myFun2()

    function myFun2() {
        const userLastName = " Verma"
        console.log(`My name is ${userSurName}${userLastName}.`); 
    }

    // console.log(userLastName);  // ==> This will definetly produce error
}

// myFun1()  // ==> My name is Suraj Verma.


// Child element acces the parent element scope value but parant element does not access the child element scope value


// --------------------------------------------------------------------------------------


// console.log(addOne(2));  // ==> 3 

function addOne(num) {
    return num + 1;
}




// addTwo(2);      // ==> This will create error (addTwo is not defined) because function are store in a variable so variable must be declare before the use (Hoisting)

let value = function addTwo(num) {   // ==> This will treat as a expression
    return num + 2;
} 