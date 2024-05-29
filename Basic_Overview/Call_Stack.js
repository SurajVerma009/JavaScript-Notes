// ------------------ Call Stack kya hota h ? --------------------------

/* Ans -- > JavaScript me "call stack" ek runtime data structure hoti hai jo function calls ko  track karta hai.Jab aap kisi function ko call karte hain, JavaScript interpreter uss function ko call stack me push karta hai.Jab function execute ho jaata hai, interpreter usse pop kar deta hai.

Call stack ek Last In, First Out(LIFO) data structure hai, matlab jo function sabse last me add hua hai woh sabse pehle execute hoga.Jab aap ek function ko call karte hain, wo stack me push hota hai, aur jab wo function execute ho jaata hai, wo stack se pop ho jaata hai.

Agar aap kisi function me se doosri function ko call karte hain(nested functions), to wo inner function uss parent function ke call stack ke upar push hoti hai.Jab inner function execute ho jaata hai, wo stack se pop ho jaati hai, aur phir control parent function ke paas wapas jaata hai.

Call stack ka istemal function calls ke tracking me hota hai, aur ye recursion ke implementations me bhi important role ada karta hai.Kabhi kabhi agar aapki code me infinite recursion hoti hai, to call stack ka overflow error bhi aata hai.  */