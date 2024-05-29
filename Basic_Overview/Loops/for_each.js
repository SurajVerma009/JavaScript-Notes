/*
JavaScript mein forEach ek Array method hai jo ek callback function ko har element ke liye ek baar chalata hai. Yeh har array element ko iterate karta hai aur us element ke saath di gayi callback function ko call karta hai. Ismein three arguments hote hain: current element, index of the current element, aur array jispar forEach chal raha hai. Yeh ek sundar aur sath hi effective tareeka hai arrays ko iterate karne ka.
*/


const arr = ["JS","Py","Cpp","Java"];

arr.forEach( function (item) {
    // console.log(item);
})    
 /*
JS
Py  
Cpp 
Java
 */

arr.forEach( function (item,index){
    // console.log(item,index);
})

/*
JS 0
Py 1  
Cpp 2 
Java 3
*/

arr.forEach( function (item,index,arr){
    // console.log(item,index,arr);
})

/*
JS 0 [ 'JS', 'Py', 'Cpp', 'Java' ]
Py 1 [ 'JS', 'Py', 'Cpp', 'Java' ]  
Cpp 2 [ 'JS', 'Py', 'Cpp', 'Java' ] 
Java 3 [ 'JS', 'Py', 'Cpp', 'Java' ]
*/


arr.forEach( (item) => {
    // console.log(item);
})

/*
JS
Py  
Cpp 
Java
*/

function printme(item) {
    console.log(item);
}

arr.forEach(printme)

/*
JS
Py  
Cpp 
Java
*/