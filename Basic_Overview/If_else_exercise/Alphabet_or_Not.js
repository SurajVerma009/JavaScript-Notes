const char = "K";

if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
   console.log(`${char} is an Alphabet`);
}
else{
    console.log(`${char} is not an  Alphabet`);
}

// output ==> K is an Alphabet

/* In JavaScript, when you compare a character with a numerical value, JavaScript automatically converts the character to its Unicode value. Therefore, you don't need to compare it with the Unicode values directly.
*/