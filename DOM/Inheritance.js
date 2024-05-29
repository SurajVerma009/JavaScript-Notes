class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName,email,password){
       super(userName)
        this.email = email
        this.password = password
    }
   ChangeUserName(){
    console.log(`${this.userName}`);
   }
}

let tea = new Teacher("Suresh","suresh@gamil.com","123")

tea.ChangeUserName()   // ==. Suresh