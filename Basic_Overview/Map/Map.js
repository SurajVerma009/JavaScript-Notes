/*
In JavaScript, the .set method is used to add or update a key-value pair in a Map object. If the key already exists in the map, the method updates its value; otherwise, it adds a new key-value pair. 
*/


// const mapVar = new Map();

// mapVar.set("name", "Suraj");

// mapVar.set("village", "Dhanapur");

// mapVar.set("isLoggedIn", true);

// mapVar.set("superHeros", ["Batman", "Spiderman", "IronMan"]);

// mapVar.set("obj", { fullName: 'Suraj Seth' });

// console.log(mapVar);
/* Map(5) {
  'name' => 'Suraj',
  'village' => 'Dhanapur',
  'isLoggedIn' => true,
  'superHeros' => [ 'Batman', 'Spiderman', 'IronMan' ],
  'obj' => { fullName: 'Suraj Seth' }
} 
*/

// for (const [key] of mapVar) {   // ==> for..of
//     // console.log(key);
// }
// 
/*name
village   
isLoggedIn
superHeros
obj    
*/

// for (const [key, value] of mapVar) {   // ==> for..of
//     // console.log(key, "-", value);
// }

/* name - Suraj
village - Dhanapur
isLoggedIn - true
superHeros - [ 'Batman', 'Spiderman', 'IronMan' ]
obj - { fullName: 'Suraj Seth' }
*/

// for (const [key , value] of mapVar) {   // ==> for..of
//     // console.log(`Type of ${key}: ${typeof value}`);
// }
/* Type of name: string
Type of village: string
Type of isLoggedIn: boolean
Type of superHeros: object
Type of obj: object
*/


//----------------------------------------------------------------

/*
 The .has method in JavaScript Map objects is used to check whether a particular key exists in the map. It returns a boolean value indicating whether the key is present or not.
 */

//  console.log(mapVar.has("village"));  // ==> true


//  ----------------------------------------------------------

/*
In JavaScript, the .delete method is used to remove a specific key and its associated value from a Map object
*/

// mapVar.delete("village");

// console.log(mapVar);

/*Map(4) {
  'name' => 'Suraj',
  'isLoggedIn' => true,
  'superHeros' => [ 'Batman', 'Spiderman', 'IronMan' ],
  'obj' => { fullName: 'Suraj Seth' }
}
*/




// ---------------------------------------------------------------

//  To retrieve a value from a Map, you use the get method.

    //   console.log(mapVar.get("name"));     // ==> Suraj


// -----------------------------------------------------------------

/* The .clear method in JavaScript Map objects is used to remove all key-value pairs from the map, effectively emptying it.
*/

// mapVar.clear();

// console.log(mapVar);    // ==> Map(0) {}


// ----------------------------------------------------------------------------------

/* Q - Achha jaise hm object define krte h direct usme key aur uski value likhte h to Map me hm ye kaise krenge kya hme hmesha .set methode use krna hoga?  */

/*
Yes, to add key-value pairs to a Map in JavaScript, you typically use the set() method. Unlike objects where you can define key-value pairs directly, with Map, you need to use the set() method for each key-value pair.

However, there is an alternative way to initialize a Map with key-value pairs directly without using the set() method repeatedly. You can pass an array of arrays, where each inner array contains a key-value pair, to the Map constructor. Here's how you can do it:*/

const mapVar = new Map([
    ["name", "Suraj"],
    ["village", "Dhanapur"],
    ["isLoggedIn", true],
    ["superHeros", ["Batman", "Spiderman", "IronMan"]],
    ["obj", { fullName: 'Suraj Seth' }]
]);

// console.log(mapVar);

for (const [key] of mapVar) {
    console.log(key);
}

// console.log(mapVar.size);   // ==> 5

// console.log(mapVar.keys());   // ==> [Map Iterator] { 'name', 'village', 'isLoggedIn', 'superHeros', 'obj' }

// console.log(mapVar.values());    
/* [Map Iterator] {
  'Suraj',
  'Dhanapur',
  true,
  [ 'Batman', 'Spiderman', 'IronMan' ],
  { fullName: 'Suraj Seth' }
}*/


// console.log(mapVar.entries());

/*
[Map Entries] {
  [ 'name', 'Suraj' ],
  [ 'village', 'Dhanapur' ],
  [ 'isLoggedIn', true ],
  [ 'superHeros', [ 'Batman', 'Spiderman', 'IronMan' ] ],
  [ 'obj', { fullName: 'Suraj Seth' } ]
}
*/