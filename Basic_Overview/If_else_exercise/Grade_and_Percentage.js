const percentage = 75;

if (percentage>=80) {
    console.log("Grade A");
} else if (percentage<80&& percentage>=70) {
    console.log("Grade B");
}else if (percentage<70&& percentage>=60) {
    console.log("Grade C");
}else if (percentage<60&& percentage>=50) {
    console.log("Grade D");
}
else{
    console.log("Fail");
}

// output ==> Grade B