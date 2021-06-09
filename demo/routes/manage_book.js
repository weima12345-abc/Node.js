let express=require('express');
let router=express.Router();
var data=new Array();
var mysql=require('mysql'); 
  let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });

// get to home book
router.get('/',(req,res)=>{
     connection.query("select * from book1",function(err,a,fieids){  
       data=a;
            res.render('manage_book',{detail:data});    
         });
});

//修改
router.get('/update/:id',(req,res)=>{
    res.render('add1',{
        obj:data[req.params.id],  
        id:req.params.id});
});

//删除
router.post('/a',(req,res)=>{
    connection.query("delete from book1 where 名称=?",[req.body.名称],(err,a,fields)=>{
      res.redirect('/manage_book');
    }) ;
  });

module.exports=router;