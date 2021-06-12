let express=require('express');
let router=express.Router();
var data=new Array();
var mysql=require('mysql'); 
  let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });

// get to home book
router.get('/',(req,res)=>{
     connection.query("select * from user",function(err,a,fieids){  
       data=a;
            res.render('manage_person',{detail:data});    
         });
});


//添加
router.post('/',(req,res)=>{
  connection.query("insert into user(id,name,password,email,phone,create_time,update_time)   value(?,?,?,?,?,?,?)",[req.body.id,req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time],function(err,c,firlds){
      res.redirect('/manage_person');       
      }); 
          });

//修改
router.get('/update/:id',(req,res)=>{
    res.render('person_add1',{
        obj:data[req.params.id],  
        id:req.params.id});
})

router.post('/a',(req,res)=>{
  connection.query("update  user set name=?,password=?,email=?,phone=?,create_time=?,update_time=? where id=?",[req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time,req.body.id],function(err,d,firlds){
    res.redirect('/manage_person');     
    }); 
  });

//删除
router.post('/b',(req,res)=>{
    connection.query("delete from user where name=?",[req.body.name],(err,a,fields)=>{
      res.redirect('/manage_person');
    }) ;
  });



module.exports=router;