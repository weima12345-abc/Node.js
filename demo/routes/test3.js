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

// get to home
router.get('/',(req,res)=>{
  
         connection.query("select * from book",function(err,a,fieids){  
       data=a;
            res.render('test3',{detail:data});    
         });
});


// sql 新增
router.post('/',(req,res)=>{
    connection.query("insert into book(id,编号,名称,作者,分类,描述) value(?,?,?,?,?,?) ",[req.body.id,req.body.编号,req.body.名称,req.body.作者,req.body.分类,req.body.描述],function(err,b,fields){
       res.redirect('/'); 
    });
});


// sql 删除 book
router.get('/delete/:id',(req,res)=>{
let sql=`delete from book where id=${req.params.id}`; 
    connection.query(sql,function(err,b,fields){
        res.redirect('/');
    })
});
// sql 删除 user
router.get('/delete1/:id',(req,res)=>{
    let sql=`delete from user where id=${req.params.id}`; 
        connection.query(sql,function(err,b,fields){
            res.redirect('/person');
        })
    });


// sql 修改 book
router.get('/update/:id',(req,res)=>{
        res.render('add1',{
        obj:data[req.params.id],  
        id:req.params.id})
});

// sql 修改 user
router.get('/update1/:id',(req,res)=>{
    res.render('add1',{
    obj:data[req.params.id], 
    id:req.params.id})
}); 






  
  
  module.exports=router;