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

      
         connection.query("select * from book limit 0,6 ",function(err,a,fieids){  
            res.render('index2',{detail:a});
         });
   
});
router.get('/a',(req,res)=>{
   connection.query("select * from 租赁表 limit 0,6 ",function(err,a,fieids){  
      res.render('indent_view',{detail:a});
   });
})
router.post('/',(req,res)=>{
  
      
  connection.query("select * from book where 名称=? and 描述=? ",[req.body.名称,req.body.描述],function(err,a,fieids){  
        
     res.render('category',{detail:a});    
  });

});
router.post('/a',(req,res)=>{
  connection.query("insert into 租赁表(id,姓名,年龄,手机号,邮箱,书籍名称,初始时间,截至时间,书籍状态) values(?,?,?,?,?,?,?,?,?)",[req.body.id, req.body.姓名,req.body.年龄,req.body.手机号,req.body.邮箱,req.body.书籍名称,req.body.初始时间,req.body.截至时间,req.body.书籍状态,req.body.书籍名称],function(err,a,fieids){  
   res.render('indent_sussess');
  
});

})
router.post('/b',(req,res)=>{
   connection.query("delete from 租赁表 where 姓名=?",[req.body.姓名],function(err,a,fieids){  
res.redirect('/g/a');
   
 });
})

  

  
  module.exports=router;