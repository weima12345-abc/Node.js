var express = require('express');
var router = express.Router();
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
})

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('manage_account');
}); 
//Already  管理登录
router.post('/', (req, res)=> {
    let sql=`select *from user  where password="${req.body.password}" and email="${req.body.email}"`;
             connection.query(sql,function(err,b,fields){
    if(sql=='select *from user  where password="20001210500" and email="18174001013@139.com"') {
      // res.redirect('g_c');
      res.render('manage_all');
      
     }else{
         res.render('manage_fail');
     }
    })
  }); 
module.exports=router; 