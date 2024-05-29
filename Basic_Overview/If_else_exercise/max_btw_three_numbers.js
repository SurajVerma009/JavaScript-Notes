let num1 = 191;

let num2 = 125;

let num3 = 191;

let largest;

if (num1 == num2 && num2 == num3) {
    console.log("Equal Each number");

} else if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}

console.log("The largest number is " + largest);

// output ==> The largest number is 191