function someOne(userName){
   this.userName = userName
}

function userData(userName,email,password){
   someOne.call(this,userName)
   this.email = email
   this.password = password
}

let code = new userData("suraj","suraj@fb.com",1212)

console.log(code);   // ==>userData { userName: 'suraj', email: 'suraj@fb.com', password: 1212 }