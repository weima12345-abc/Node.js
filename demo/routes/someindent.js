let express=require('express');
let router=express.Router();
var fs=require('fs');
let data=new Array();
var mysql=require('mysql');
let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });  
router.get('/',(req,res)=>{
connection.query("select * from book ",(err,a,fieids)=>{
    res.render('indent',{detail:a});
})
    
}) 
    router.post('/',(req,res)=>{ 
        connection.query("insert into 租赁表(id,姓名,年龄,手机号,邮箱,书籍名称,初始时间,截至时间,书籍状态) values(?,?,?,?,?,?,?,?,?)",[req.body.id, req.body.姓名,req.body.年龄,req.body.手机号,req.body.邮箱,req.body.书籍名称,req.body.初始时间,req.body.截至时间,req.body.书籍状态,req.body.书籍名称],function(err,a,fieids){  
             res.redirect('b'); 
           
         });
    });
  

  
  module.exports=router;