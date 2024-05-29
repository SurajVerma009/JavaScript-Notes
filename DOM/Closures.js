/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/


function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();

myFunc();   // ==> Mozilla

// So Notice that we return the displayName() function but we not only return inner function scope we return lexical scoping means parent scope (lexical scope)  , This is closure