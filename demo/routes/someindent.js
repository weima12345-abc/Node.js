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

      
 
    res.render('indent');
})
    router.post('/',(req,res)=>{
        connection.query("insert into 租赁表 values(?,?,?,?,?,?,?,?)",[req.body.姓名,req.body.年龄,req.body.手机号,req.body.邮箱,req.body.书籍名称,req.body.初始时间,req.body.截至时间,req.body.书籍状态],function(err,a,fieids){  
             res.redirect('b');
           
         });
    });
  

  
  module.exports=router;