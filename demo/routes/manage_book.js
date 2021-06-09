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
     connection.query("select * from book",function(err,a,fieids){  
       data=a;
            res.render('manage_book',{detail:data});    
         });
});

//增添 
router.post('/',(req,res)=>{
  connection.query("insert into book(z_id ,id,name,zz,fl,ms,price) value(?,?,?,?,?,?,?) ",[req.body.id,req.body.编号,req.body.名称,req.body.作者,req.body.分类,req.body.描述,req.body.价格],function(err,b,fields){
    //  res.redirect('/'); 
    res.redirect('/manage_book'); 
  });
});

//修改
router.get('/update/:id',(req,res)=>{
    res.render('add1',{
        obj:data[req.params.id],  
        id:req.params.id});
});

router.post('/a',(req,res)=>{
  connection.query("update  book set  id=?,name=?,zz=?,fl=?,ms=?,price=? where z_id=?",[req.body.id,req.body.name,req.body.zz,req.body.fl,req.body.ms,req.body.price,req.body.z_id],function(err,c,firlds){
    // res.redirect('/');
    res.redirect('/manage_book');  
    }); 
  });

//删除
router.post('/a',(req,res)=>{
    connection.query("delete from book where name=?",[req.body.名称],(err,a,fields)=>{
      res.redirect('/manage_book');
    }) ;
  });

module.exports=router;