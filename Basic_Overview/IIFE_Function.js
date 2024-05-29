//  ---------- Immediately Invoked Function Expression (IIFE) ----------

// Jab hm chahte h ki globle object ke variable ka polution hmare funtion ko effect na kre tb hm IIFE function bnate h jo turnt call ho jata h 

(function myFun() {
    console.log("Database Connected");
})();
// ==> Output : Database Connected


// Agar aapke code me 2 IIFE funtion h to sabhi IIFE funtion ko semicolen se bnd krna hoga kyonki IIFE funtion ko nhi pta hota h ki iska end kaha h 

// Aap Arrow funtion ko bhi IIFE bna sakte h 

(() => {
    console.log("Datebase2 Connected");
})();
// ==> Output : Database2 Connected