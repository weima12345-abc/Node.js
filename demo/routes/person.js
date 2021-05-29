let express=require('express');
let router=express.Router();
let User=require('./bean/user');
let data=new Array();
var mysql=require('mysql');
let connection=mysql.createConnection({
    user:"root",
    password:"123456",
    database:"01"
});  
router.get('/',(req,res)=>{
   
         connection.query("select * from user",function(err,a,fieids){  
             console.log(a);    
            res.render('person',{detail:a});    
         });
   
})
            router.post('/',(req,res)=>{
                let user= new User(req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time);
                req.session.user=user;
                connection.query("insert into user(name,password,email,phone,create_time,update_time) value(?,?,?,?,?,?)",[req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time],function(err,b,fields){
                    res.redirect('Login'); 
                 }); 
                //  res.redirect('Login');
                });
        

  
  
  module.exports=router;