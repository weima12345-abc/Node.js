let express=require('express');
let router=express.Router();
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
});

//查询 book
router.post('/',(req,res)=>{

  let sql=`select * from book where name like '${req.body.name}'  `;
  connection.query(sql,function(err,a,fields){
  // res.render('test3',{detail:a});
  res.render('manage_book',{detail:a}); 
  })
});


//查询 person
router.post('/b',(req,res)=>{

  let sql=`select * from user where name like '${req.body.name}'`;
  connection.query(sql,function(err,a,fields){
  // res.render('test3',{detail:a});
  res.render('manage_person',{detail:a});
  })
});



//查询 租赁人
router.post('/c',(req,res)=>{

  let sql=`select * from 租赁表 where book_name like '${req.body.book_name}'`;
  connection.query(sql,function(err,a,fields){
  // res.render('test3',{detail:a});
  res.render('manage_p_b',{detail:a});
  })
});


router.post('/user',(req,res)=>{

  let sql=`select * from user where name like '${req.body.name}%' or email like '${req.body.email}%' or phone like '${req.body.phone}%' `;
  connection.query(sql,function(err,a,fields){
  res.render('person',{detail:a});
  })
 
})
module.exports=router;