// ------------------------- This Keyword -----------------------

const obj = {
     userName : "Suraj Verma",
     price : 999,
     welcomeMassage : function massege(){
       console.log(`${this.userName} , welcome  in my website`);
    }
}

// obj.welcomeMassage();   // ==> Suraj Verma , welcome  in my website
 


// agar aap object ke andar ek method ke through object ke property ko access kar rahe hain, to aapko "this" ka upayog karna padega

// "this" keyword  refer to the current context.


// ------------------------------------------------------------------

const obj2 = {
    userName : "Suraj Verma",
    price : 999,
    welcomeMassage : function massege(){
      console.log(`${this.userName} , welcome  in my website`);
      console.log(this);
   }
}

// obj2.welcomeMassage();
/* Suraj Verma , welcome  in my website
{
  userName: 'Suraj Verma',
  price: 999,
  welcomeMassage: [Function: massege]
}
*/

// console.log(this);  // ==> {}

// Jab aap console.log(this); browser me print krenge t window output aayega kyonki browser me globle object window hota h



//  -------------------------- Arrow => Function ----------------------------


const arrow1 = (num1 , num2) => {    
    return num1 + num2         // ==> Explicit return
}

// console.log(arrow1(3,6));  // ==> 9


const arrow2 = (num1 , num2) => num1 + num2         // ==> Implicit return

// console.log(arrow2(3,6));     // ==> 9


// Jab aap curlibraces{} likhenge to aapko return likhana hi pdega 

/* but suppose kriye aap arrow function me ik object return kr rhe h tb waha jb aap object ke liye curlibraces likhenge tb to wo return keyword mangne lgega tb us time aapko object ko parenthesis () me wrap krna hoga */

// const arrow3 = () => { userName : "suraj"}

// console.log(arrow3());   // ==> undefined

const arrow3 = () => ({userName : "suraj"})

console.log(arrow3());   // ==> { userName: 'suraj' }