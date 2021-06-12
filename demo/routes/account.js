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
  

  connection.query(" SELECT *from  `租赁表`   limit 0,6 ",function(err,a,fieids){  
    res.render('account',{detail:a});
 }); 

}); 



 //Already 注册
router.post('/',(req,res)=>{ 

           connection.query("select *from user  where password=? and email=?",[req.body.password,req.body.email],function(err,b,fields){
            if(b[0]!=undefined){
              // res.redirect('g');
              res.redirect('account');
            }else{
              res.render('indent_fail');                    
            }
                   });
                   })  
  //下订单 
  router.post('/a',(req,res)=>{  
           connection.query("insert into 租赁表(id,name,book_name,yx) value(?,?,?,?) ",[3,"李四", req.body.name,"18174001013@139.com"],(err,a,fields)=>{
res.redirect('/account'); 
           })
    
  })
module.exports = router;