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
});
//添加
router.get('/add',(req,res)=>{
  
        res.render('z_person_add',{obj:{},id:{}});
  
});
router.post('/',(req,res)=>{
    connection.query("insert into 租赁表 values(?,?,?,?,?,?,?)",[req.body.id,req.body.name,req.body.age,req.body.yx,req.body.book_name,req.body.c_time,req.body.u_time],(err,a,fields)=>{
        res.redirect('/manage_p_b');
    })
});


//修改
router.get('/update/:id',(req,res)=>{
res.render('z_person_add1',{obj:data[req.params.id]});

})

router.post('/a',(req,res)=>{
    connection.query("update 租赁表 set name=?,age=?,yx=?,book_name=?,c_time=?,u_time=? where id =?",[req.body.name,req.body.age,req.body.yx,req.body.book_name,req.body.c_time,req.body.u_time,req.body.id],(err,a,fields)=>{
        res.redirect('/manage_p_b');
    })
})


//删除
router.post('/b',(req,res)=>{
    connection.query("delete from 租赁表 where book_name =?",[req.body.book_name],(err,a,fields)=>{
        res.redirect('/manage_p_b');
    })
})






      module.exports=router;