function parent() {
    let username = "Suraj"
    function child() {
        console.log(username);
    }
    child()
}

parent()    // ==> Suraj

// So Inner fuction(child) is access the property of Outer function(parent) , this is called Lexical scoping

function parent2() {

    function sibling1() {
        let x = 3
    }
    function sibling2() {
        console.log(x);
    }

    sibling1()
    sibling2()
}

// parent2()    // ==> Error--> x is not defined , So child access the property of parent but both child dont share his property in between and also parent dont acces the property of child