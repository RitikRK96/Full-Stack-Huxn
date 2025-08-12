let data = "This is DATA"

class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data Viewed", data)
    }
}

class admin extends user{
    editData(){
        data = "value changed"
    }
}

let a = new user("Ritik", "ritik@gmail.com");
let b = new user("Trampo", "Trampo@gmail.com");
let c = new admin()
console.log(b)
console.log(b.viewData())
c.editData()
console.log(b.viewData())