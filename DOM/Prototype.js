// Ham kisi bhi function me apna khud ka prototype property add kr sakte h 

function myFun(username, score) {
    this.username = username
    this.score = score
}

myFun.prototype.increment = function () {
    this.score++;
    console.log(this.score);
}

myFun.prototype.printMe = function () {
    console.log(this.username);
}

// new keyword ka use krna hoga iss nye property ko inject krne ke liye 
// new keyword ik constructer function h

const chai = new myFun("Suraj", 25);

const tea = new myFun("hitesh", 30);

chai.increment()   // ==> 26
chai.printMe()    // ==> Suraj