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
  connection.query("update  book set id=?,编号=?,名称=?,作者=?,分类=?,描述=? where 编号=?",[req.body.id,req.body.编号,req.body.名称,req.body.作者,req.body.分类,req.body.描述,req.body.编号],function(err,c,firlds){
    res.redirect('/');     
    }); 
  });
// // sql 修改 user
// router.post('/add',(req,res)=>{
//   connection.query("update  book set id=?,编号=?,名称=?,作者=?,分类=?,描述=? where 编号=?",[req.body.id,req.body.编号,req.body.名称,req.body.作者,req.body.分类,req.body.描述,req.body.编号],function(err,c,firlds){
//     res.redirect('/');     
//     }); 
//   });

 
  

// sql 查询
    module.exports=router;