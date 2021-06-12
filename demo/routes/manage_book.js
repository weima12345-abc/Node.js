let express=require('express');
let router=express.Router();
var data=new Array();
var mysql=require('mysql'); 
 var formidable=require('formidable');
 var path=require('path');
 var fs=require('fs');

  let connection=mysql.createConnection({
          user:"root",
          password:"123456",
          database:"01"
      });

// get to home book
router.get('/',(req,res)=>{
     connection.query("select * from book",function(err,a,fieids){  
       data=a;
            res.render('manage_book',{detail:data});    
         });
});

//增添 
router.post('/',(req,res)=>{
 var form= formidable({
multiples:true,
uploadDir:path.join(__dirname,"../public/upload_img" ,)
  });
  form.parse(req,(err,fields,files)=>{

 
    var newName="d:\\restful (node.js)\\demo\\public\\upload_img\\"+files.img.name;
fs.rename(files.img.path,newName,(err=>{
console.log(err);
}))
connection.query("insert into book(z_id,id,name,zz,fl,ms,price,img) value(?,?,?,?,?,?,?,?) ",[fields.id,fields.编号,fields.名称,fields.作者,fields.分类,fields.描述,fields.价格,"/upload_img/"+files.img.name],function(err,b,fields){
  //  res.redirect('/'); 
  res.redirect('/manage_book'); 
});
  })

  
});

//修改
router.get('/update/:id',(req,res)=>{
    res.render('add1',{
        obj:data[req.params.id],  
        id:req.params.id});
});

router.post('/a',(req,res)=>{
  connection.query("update  book set  id=?,name=?,zz=?,fl=?,ms=?,price=? where z_id=?",[req.body.id,req.body.name,req.body.zz,req.body.fl,req.body.ms,req.body.price,req.body.z_id],function(err,c,firlds){
    // res.redirect('/');
    res.redirect('/manage_book');  
    }); 
  });

//删除
router.post('/b',(req,res)=>{
    connection.query("delete from book where name=?",[req.body.名称],(err,a,fields)=>{
      res.redirect('/manage_book'); 
    }) ;
  });

module.exports=router;