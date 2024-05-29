let Myarr = ["Suraj", "Deepak", "Ankita"];

for (const arr of Myarr) {
    // console.log(arr);
}
/*
Suraj
Deepak
Ankita
*/

let Mystring = "Kamlesh";

for (const str of Mystring) {
    // console.log(str);
}
/*
K
a
m
l
e
s
h
*/

const myObj = {
    In : "India",
    Fr : "France",
};

for (const obj of myObj) {
    // console.log(obj);
}    
// ==> TypeError: myObj is not iterable

// So for..of loop dont work on object