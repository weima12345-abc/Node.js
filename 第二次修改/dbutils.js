let express=require('express');
let router=express.Router();
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
});
router.post('/',(req,res)=>{
  


// sql 修改

  let sql=
  `
  update  book set 
  id=${req.body.id},
  编号=${req.body.编号},
  名称=${req.body.名称},
  作者=${req.body.作者},
  分类=${req.body.分类},
  描述=${req.body.描述} where id=${req.body.id}`;
  connection.query(sql,function(err,c,firlds){
  res.redirect('/'); 


  
    
    });
  });
    module.exports=router;