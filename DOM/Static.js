// Without using static keyword we access the logMe() method

// class user{
//     constructor(username){
//     this.username = username
//     }

//     logMe(){
//         console.log(`My Username is : ${this.username}`);
//     }
// }

// class Teacher extends user{
//     constructor(username,email,Password){
//      super(username)
//      this.email = email
//      this.Password = Password
//     }
// }

// let teacher = new Teacher("Suraj","suraj@google.com","123abc")

// // teacher.logMe()   // ==> My Username is : Suraj

// let User = new user("Mahesh")

// // User.logMe()   // ==> My Username is : Mahesh


// ---------------------------------------------------------------------------

// Using static keyword we dont acces the logMe() method

class user{
    constructor(username){
    this.username = username
    }

     static logMe(){
        console.log(`My Username is : ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,Password){
     super(username)
     this.email = email
     this.Password = Password
    }
}

let teacher = new Teacher("Suraj","suraj@google.com","123abc")

// teacher.logMe()   // ==> error

let User = new user("Mahesh")

// User.logMe()   // ==> error