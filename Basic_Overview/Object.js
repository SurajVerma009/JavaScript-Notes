const user = {
  name: "Suraj",
  "fullName": "Suraj Seth",
  Address: "Dhanapur",
  email: "surajverma55085508@gmail.com",
  isLoggedIn: true
};

// in Js , every object keys name by default store as a string ("") like name store as "name" 

// console.log(user.name);   // ==> Suraj

// console.log(user["name"]);    // ==> Suraj  (another way)

// console.log(user.fullName);     // ==> Suraj Seth

// console.log(user["fullName"]);  // ==> Suraj Seth

// console.log(user); 
/* ==> {
   name: 'Suraj',
   fullName: 'Suraj Seth',
   Address: 'Dhanapur',
   email: 'surajverma55085508@gmail.com',
   isLoggedIn: true
 } */



 const myobj = {
  name : "happy",
  name : "Welcome"
};

// console.log(myobj.name);   // ==> Welcome

/*
JavaScript mein, agar aap ek object mein ek hi key ke saath do alag-alag values assign karte hain, toh JavaScript sirf ek value ko hi store karta hai, kyunki keys unique hone chahiye. Isliye, dono values overwrite ho jati hain aur sirf ek value store hoti hai. 
*/


// ------------------------------------------------------------

// create a Symbole and use this symbol in object key name

let mySym = Symbol("Key1")   // ==> create a Symbol

const jsUser = {
  name: "Suraj",
  [mySym]: "My key1",  // ==> This is syntax for Symbol
  Address: "Dhanapur",
  email: "surajverma55085508@gmail.com",
  isLoggedIn: true
}

// console.log(jsUser);
/* {
  name: 'Suraj',
  Address: 'Dhanapur',
  email: 'surajverma55085508@gmail.com',
  isLoggedIn: true,
  [Symbol(key1)]: 'My key1'
}
 */

// console.log(jsUser[mySym]);    // ==> My key1

// console.log(jsUser.mySym);     // ==> undefined (Wrong)


// ------------------------------------------------------------------

const user2 = {
  name: "Suraj",
  "fullName": "Suraj Seth",
  Address: "Dhanapur",
  email: "surajverma55085508@gmail.com",
  isLoggedIn: true
};


user2.email = "surajverma55085508@google.com"  // ==> changing the email value

// console.log(user2.email);    // ==> surajverma55085508@google.com


// ---------------------------------------------------------------

// If you want no change in your object then use object.freez()

const user3 = {
  name: "Suraj",
  "fullName": "Suraj Seth",
  Address: "Dhanapur",
  email: "surajverma55085508@gmail.com",
  isLoggedIn: true
};

Object.freeze(user3);

user3.email = "suraj@microsoft.com";

// console.log(user3.email);  // ==> surajverma55085508@gmail.com (No Change in email)


// -----------------------------------------------------------------

const user4 = {
  name: "Suraj",
  "fullName": "Suraj Seth",
  Address: "Dhanapur",
  email: "surajverma55085508@gmail.com",
  isLoggedIn: true
};

user4.day = "sunday";  // ==> Add new Key-value pair

// console.log(user4);  
/* {
  name: 'Suraj',
  fullName: 'Suraj Seth',
  Address: 'Dhanapur',
  email: 'surajverma55085508@gmail.com',
  isLoggedIn: true,
  day: 'sunday'
}
*/

// ==> Notice that we add a key and his value in user4


//----------------------------------------------------------------

const user5 = {
  name: "Suraj",
  "fullName": "Suraj Seth",
  Address: "Dhanapur",
  email: "surajverma55085508@gmail.com",
  isLoggedIn: true
};

user5.greeting = function () {
  console.log("Hello Js User ,can You see me");
}


// console.log(user5.greeting()); 

/* ==> Hello Js User ,can You see me
undefined */

/* Yahaan, user5 object mei ek greeting function add kiya gaya hai. Yeh function console.log ke zariye "Hello Js User ,can You see me" print karta hai. Lekin, isme ek chhoti si samasya hai, jo hai ki yeh function koi value return nahi karta, matlab ki yeh undefined return karega. 
*/

user5.greeting2 = function () {
  console.log(`Hello my name is ${this.fullName}`);
}

// console.log(user5.greeting2());

/*Hello my name is Suraj Seth
undefined
*/

// console.log(user5);

/* {
  name: 'Suraj',
  fullName: 'Suraj Seth',
  Address: 'Dhanapur',
  email: 'surajverma55085508@gmail.com',
  isLoggedIn: true,
  greeting: [Function (anonymous)],     
  greeting2: [Function (anonymous)]     
}
*/


// --------------------------------------------------------------------------

const tinderUser = new Object();  // ==> He creates a singlton object

// console.log(tinderUser);   // ==> {}

tinderUser.id = "121";

tinderUser.name = "Suraj";

tinderUser.email = "some@gmail.com";

// console.log(tinderUser);  // ==> { id: '121', name: 'Suraj', email: 'some@gmail.com' }


// -----------------------------------------------------------------------------

const someUser = {
  id: "123abc",
  email: "harry@google.com",
  fullName: {
    userFullName: {
      firstName: "Suraj",
      lastName: "Verma",
    },
  },
  Address: "Dhanapur",
  isLoggedIn: true
};

// console.log(someUser.fullName);  // ==> { userFullName: { firstName: 'Suraj', lastName: 'Verma' } }

// console.log(someUser.fullName.userFullName);  // ==> { firstName: 'Suraj', lastName: 'Verma' }

//---------------------------------------------------------------


const obj1 = { 1: "a", 2: "b" };

const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign({}, obj1, obj2);    // ==> (First way)

// console.log(obj3);  // ==> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = { ...obj1, ...obj2 };  // ==> (Second Way)

// console.log(obj3);    // ==> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// -------------------------------------------------------------------


let obj = [
  {
    firstName: "suraj",
    lastName: "verma"
  },

  {
    email: "someone@gmail.com"
  }
];

// console.log(obj[0].firstName);   // ==> suraj

// console.log(obj[1].email);   // ==> someone@gmail.com


//----------------------------------------------------------------

let newObj = {
  fullName : "MySirG",
  email:"MySir@microsoft.com",
  Address:"Jaipur",
  Id:101,
  isLoggedIn:false
};

// console.log(Object.keys(newObj)); // ==> [ 'fullName', 'email', 'Address', 'Id', 'isLoggedIn' ]

// console.log(Object.values(newObj));  // ==> [ 'MySirG', 'MySir@microsoft.com', 'Jaipur', 101, false ]

// console.log(Object.entries(newObj));

/* ==> [
  [ 'fullName', 'MySirG' ],
  [ 'email', 'MySir@microsoft.com' ],
  [ 'Address', 'Jaipur' ],
  [ 'Id', 101 ],
  [ 'isLoggedIn', false ]
]   */

// --> Notice that return type Array


// --------------- Object de-structure ------------------------------

const student = {
  studentName : "Saurav",
  rollNumber : 101,
  collegeName : "Amar Veer Inter College",
  isPass : true
};

let {studentName:Name} = student;

console.log(Name);     // ==> Saurav

// console.log(student.Name);  // ==> undefined