let express=require('express');
let router=express.Router();
let User=require('./bean/user');
let data=new Array();
var mysql=require('mysql');
let connection=mysql.createConnection({
    user:"root",
    password:"123456",
    database:"01"
}); 


//go to home user
router.get('/',(req,res)=>{
   
         connection.query("select * from user",function(err,a,fieids){  
            data=a ;   
            res.render('person',{detail:data});    
         }); 
   
})
//登录注册
router.post('/',(req,res)=>{
  let user= new User(req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time);
      req.session.user=user;
         connection.query("insert into user(id,name,password,email,phone,create_time,update_time)   value(?,?,?,?,?,?,?)",[req.body.id,req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time],function(err,b,fields){
               res.redirect('Login'); 
                 }); })  
                 
                
// sql 传输新增 user
router.post('/person_add',(req,res)=>{
    connection.query("insert into user(id,name,password,email,phone,create_time,update_time)   value(?,?,?,?,?,?,?)",[req.body.id,req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time],function(err,c,firlds){
        res.redirect('/manage_person');       
        }); 
            });


// sql 删除 user
router.get('/delete1/:id',(req,res)=>{
    let sql=`delete from user where id=${req.params.id}`; 
        connection.query(sql,function(err,b,fields){
            res.redirect('/person');
        })
    });


// sql 修改 user
router.get('/update1/:id',(req,res)=>{
    res.render('person_add1',{
    obj:data[req.params.id], 
    id:req.params.id});
    
});  
 

module.exports=router;