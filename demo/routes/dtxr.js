let express=require('express');
let router=express.Router();
// var fs=require('fs');
// let data=new Array();
// var mysql=require('mysql');
// router.get('/',(req,res)=>{
//     let connection=mysql.createConnection({
//           user:"root",
//           password:"123456",
//           database:"01"
//       }); 
//          connection.query("select * from book",function(err,a,fieids){  
//              console.log(a);    
//             res.render('dtxr',{detail:a});    
//          });});

  
router.get('/',(req,res)=>{
    res.render('add',{ obj:{}, 
    id:""});
});

  module.exports=router;