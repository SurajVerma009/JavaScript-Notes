const userName = "Suraj Seth";

let userPassword = 11234;

var userEmail = "suraj@google.com";

userState = "Uttar Pradesh"

let userNumber;

console.table([userName,userPassword,userEmail,userState,userNumber]);

/*
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 'Suraj Seth'       │
│ 1       │ 11234              │
│ 2       │ 'suraj@google.com' │
│ 3       │ 'Uttar Pradesh'    │
│ 4       │ undefined          │
└─────────┴────────────────────┘

*/

// --------------------------- Some Important Notes -----------------------

/*  1 --> constant Variable are not re-daclare and re-assign 
    2 --> 'const' declarations must be initialized.
    3 --> let variable are not re-declare but re-assignment are allow
    4 --> var varible are allowed re-declare and re-assign
    5 --> Prefer not to use var, bacause of issue in block scope and functional scope
*/