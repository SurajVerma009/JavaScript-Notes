class user {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value  // ==> Hme variable ka name alg dena hoga agar same denge to constructer aur set email() dono ik sath set krne lgenge value aur call stack ki size exeeded ho jayegi
    }

    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value
    }
}

let object = new user("S@gmail.com", "123abc")

console.log(object.email);        // ==> S@GMAIL.COM
console.log(object.password);     // ==> 123ABC