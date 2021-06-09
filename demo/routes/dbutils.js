let express=require('express');
let router=express.Router();
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
});
// sql 修改 book
router.post('/add',(req,res)=>{
  connection.query("update  book1 set 编号=?,名称=?,作者=?,分类=?,描述=?,价格=? where id=?",[req.body.编号,req.body.名称,req.body.作者,req.body.分类,req.body.描述,req.body.价格,req.body.id],function(err,c,firlds){
    res.redirect('/');     
    }); 
  });
// sql 修改 user
router.post('/person_add',(req,res)=>{
  connection.query("update  user set id=?,name=?,password=?,email=?,phone=?,create_time=?,update_time=? where id=?",[req.body.id,req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time,req.body.id],function(err,d,firlds){
    res.redirect('/person');     
    }); 
  });

 
  


    module.exports=router;