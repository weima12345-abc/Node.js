let express=require('express');
let router=express.Router();
var data=new Array();
var mysql=require('mysql'); 
  let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });
router.get('/',(req,res)=>{
    connection.query("select *from 租赁表",(err,a,fields)=>{
        data=a;
        res.render('manage_p_b',{detail:data});
    })
})



      module.exports=router;