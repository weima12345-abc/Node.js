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
  
  res.render('account');
}); 



 //Already 注册
router.post('/',(req,res)=>{ 
  let sql=`select *from user  where password="${req.body.password}" and email="${req.body.email}"`;
           connection.query(sql,function(err,b,fields){
                  if(req.body.password==b[0].password&&req.body.email==b[0].email){
                      res.redirect('g');    
                } else{
                  res.render('indent_fail');  
                }
                   }); })                   
module.exports = router;