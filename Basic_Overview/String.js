// let name = "Suraj";

// let surName = " Seth"

// console.log(name + surName);

// Another way using backticks (string interpulation)

// console.log(`My name is : ${name} ${surName}`);  // ==> My name is : Suraj  Seth


// ---------------------- String Object ------------------------

// let anotherString = new String("Suraj Seth")

// console.log(anotherString);          // ==> [String: 'Suraj Seth']

// console.log(typeof anotherString);  // ==> object

// let anotherString2 = new String("Suraj Seth")

// console.log(anotherString === anotherString2);   // ==> false

/*
new keyword ke saath agar ek  object banate hain, toh har baar ek naya object create hota hai, jiska alag reference hota hai. Isliye, anotherString === anotherString2 false return karega kyunki dono objects ka reference alag hai, chahe unka content same hi kyun na ho.
*/

// --------------------------------------------------------------

// Creating string object , we can use multiple methods

// let anotherString = new String("Suraj Seth")

// console.log(anotherString.length);   // ==> 10

// console.log(anotherString.charAt(2));   // ==> r

// console.log(anotherString.indexOf("r"));   // ==> 2

// let str1 = new String("Dhanapur");
// let str2 = new String(" Chandauli");

// let addString = str1.concat(str2);  // ==> return new string

// console.log(addString);   // ==> Dhanapur Chandauli

// let strobj = new String("surajseth@gmail.com")

// console.log(strobj.includes("@"));   // ==> true

// let strObj = new String("Suraj Seth")

// console.log(strObj.replace("Seth","Soni"));   // ==> Suraj Soni

// strObj = strObj.replace("Seth","Soni");

// console.log(strObj);    // ==> Suraj Soni

// let str = new String("Shaktiman")

// console.log(str.substring(0,6));   // ==> Shakti

// let str = new String("Doremon");

// console.log(str.slice(0,4));    // ==> Dore

// let str = new String("Suraj-Verma-dot-Com");

// console.log(str.split("-"));   // ==> [ 'Suraj', 'Verma', 'dot', 'Com' ]

// let str = new String("Suraj Seth");

// console.log(str.toLowerCase());   // ==> suraj seth

// console.log(str.toUpperCase());  // ==>  SURAJ SETH

// let str = new String( "     Suraj Verma         ");

// console.log(str);         // ==>      Suraj Verma

// console.log(str.trim());   // ==> Suraj Verma  (No space before and after)