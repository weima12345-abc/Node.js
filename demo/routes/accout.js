var express = require('express');
var router = express.Router();
let User=require('./bean/user');
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
})
/* GET home page. */
router.get('/', (req, res)=> {
  res.render('login2');
}); 
//登录注册
router.post('/',(req,res)=>{
    let user= new User(req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time);
        req.session.user=user;
           connection.query("insert into user(id,name,password,email,phone,create_time,update_time)   value(?,?,?,?,?,?,?)",[req.body.id,req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time],function(err,b,fields){
                 res.render('zc_sussess'); 
                   }); })  
 
module.exports = router;