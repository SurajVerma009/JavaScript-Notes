const myObj = {
    In: "India",
    Fr: "France",
};

for (const key in myObj) {
    //    console.log(key);
}

/* 
In
Fr
*/

for (const key in myObj) {
    // console.log(myObj[key]);
}

/*
India
France
*/


// ------------------------------------------------------------------------

let myArr = ["War", "Pyar", "Dhokha"];

for (const key in myArr) {
    //    console.log(key);
}

/*
0
1
2
*/

for (const key in myArr) {
    // console.log(myArr[key]);
}

/*
War
Pyar  
Dhokha
*/