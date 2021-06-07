var express = require('express');
var router = express.Router();
let User=require('./bean/user');
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
})
/* GET home page. */
router.get('/', (req, res)=> {
  
  res.render('account');
}); 



 //Already 注册
router.post('/',(req,res)=>{ 

           connection.query("select *from user  where password=? and email=?",[req.body.password,req.body.email],function(err,b,fields){
            if(b[0]!=undefined){
              res.redirect('g');
            }else{
              res.render('indent_fail');                    
            }

                //   if(req.body.password==b[0]&&req.body.email=="1@1.com"){
                //       res.redirect('g');    
                // }
                // else{
                //   res.render('indent_fail');                    
                // }

          

                   });
                   })                   
module.exports = router;