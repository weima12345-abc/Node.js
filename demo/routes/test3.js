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

// get to home book
router.get('/',(req,res)=>{
  
         connection.query("select * from book1",function(err,a,fieids){  
       data=a;
            res.render('test3',{detail:data});    
         });
});


// sql 新增 book
router.post('/',(req,res)=>{
    connection.query("insert into book1( id ,编号,名称,作者,分类,描述,价格) value(?,?,?,?,?,?,?) ",[req.body.id,req.body.编号,req.body.名称,req.body.作者,req.body.分类,req.body.描述,req.body.价格],function(err,b,fields){
      //  res.redirect('/'); 
      res.redirect('/manage_book'); 
    });
});


// sql 删除 book
// router.get('/delete/:id',(req,res)=>{
// let sql=`delete from book1 where 名称=${req.body.名称}`; 
//     connection.query(sql,function(err,b,fields){
//         res.redirect('/');
//     })
// });








// sql 修改 book
router.get('/update/:id',(req,res)=>{
        res.render('add1',{
        obj:data[req.params.id],  
        id:req.params.id})
});
// 分页
router.get('/next',(req,res)=>{ 
 
        var pagenum = req.query.page;
        var start;
        var end;
        if(pagenum == undefined){
          pagenum = 1;
          start = 0;
          end = 5;
        }
        else{
          start = (pagenum -1)*5+1;
          //第六条开始， 如果这样写：start = (pagenum -1)*5-1 第二页会显示六条数据，而且从第五条开始
          end = pagenum*5;
        }
        sql.connect(db).then(function () {
          //sql.query("SELECT * from  (select ROW_NUMBER()over(order by AcademeID) as hh,AcademeID,AcademeName,AcademeCode from SYS_Academe)u where hh BETWEEN '"+start+"' and '"+end+"'",function (err,data) {//测试是否可以接受上边声明的条数，是否正确
              sql.query("SELECT (select count(*) as RecordCount from SYS_Academe) as count, * FROM (SELECT ROW_NUMBER() OVER (ORDER BY AcademeID) AS ROW_NUMBER, * FROM SYS_Academe AS t0) AS t1 WHERE t1.ROW_NUMBER BETWEEN'"+start+"' and '"+end+"'",function (err,data) {
            if (err){
              console.log(err);
            } else {
              res.render("test3",{departmentList:data.recordset,pagenum:pagenum})
                sql.close()
            }
          })
        })
      })
      









  
  
  module.exports=router;