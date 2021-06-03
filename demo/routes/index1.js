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
// router.get('/',(req,res)=>{
//     let connection=mysql.createConnection({
//           user:"root",
//           password:"123456",
//           database:"01"
//       });  
      
//          connection.query("select * from book where 名称=? or 描述=? "[req.body],function(err,a,fieids){  
              
//             res.render('index1',{detail:a});    
//          });
//     // res.render('index1');
// });

router.post('/',(req,res)=>{
  
      
         connection.query("select * from book where 名称=? and 描述=? ",[req.body.名称,req.body.描述],function(err,a,fieids){  
              
            res.render('index1',{detail:a});    
         });
    // res.render('index1');
});
  

  
  module.exports=router;