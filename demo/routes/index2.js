let express=require('express');
let router=express.Router();
var fs=require('fs');
let data=new Array();
var mysql=require('mysql');
router.get('/',(req,res)=>{
    // let connection=mysql.createConnection({
    //       user:"root",
    //       password:"123456",
    //       database:"01"
    //   });  
      
    //      connection.query("select * from book limit 0,6 ",function(err,a,fieids){  
    //          console.log(a);    
    //         res.render('index',{detail:a});    
    //      });
    res.render('index2');
});
  

  
  module.exports=router;