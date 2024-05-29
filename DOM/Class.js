/*
A JavaScript class is not an object.

It is a template for JavaScript objects.

The constructor method is called automatically when a new object is created.

If you do not define a constructor method, JavaScript will add an empty constructor method.
*/

class Car{
    constructor(name,year){
     this.name = name
     this.year = year
    }
}

let myCar = new Car("Audi",2014)

// console.log(myCar);     // ==> Car { name: 'Audi', year: 2014 }

// console.log(myCar.year);   // ==> 2014



// -----------------------------------------------------------------------------

class anotherCar{
    constructor(name,year){
        this.name = name
        this.year = year
    }
    age(){
       let carAge = new Date().getFullYear() - this.year
        console.log(`My car is ${carAge} years old`);
    }
}

let cars = new anotherCar("Scorpio",2014)

// cars.age()  // ==> My car is 10 years old