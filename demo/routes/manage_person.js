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
router.get('/update/:id',(req,res)=>{
    res.render('person_add1',{
        obj:data[req.params.id],  
        id:req.params.id});
})

router.post('/a',(req,res)=>{
    connection.query("delete from user where name=?",[req.body.name],(err,a,fields)=>{
      res.redirect('/manage_person');
    }) ;
  });
module.exports=router;