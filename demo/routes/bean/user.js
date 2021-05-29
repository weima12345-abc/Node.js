

class User{
    constructor(name,password,email,phone,create_time,update_time){
        this.name=name;
        this.password=password;
        this.email=email;
        this.phone=phone;
        this.create_time=create_time;
        this.update_time=update_time;
    }

}
module.exports=User;