let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.render('add',{ obj:{}, 
    id:""});
});

router.get('/person_add',(req,res)=>{
  res.render('person_add',{obj:{},id:""});
});
// router.get('/',(req,res)=>{
  
//   var pagenum = req.query.page;
//   var start;
//   var end;
//   if(pagenum == undefined){
//     pagenum = 1;
//     start = 0;
//     end = 5;
//   }
//   else{
//     start = (pagenum -1)*5+1;
//     //第六条开始， 如果这样写：start = (pagenum -1)*5-1 第二页会显示六条数据，而且从第五条开始
//     end = pagenum*5;
//   }
//   sql.connect(db).then(function () {
//     //sql.query("SELECT * from  (select ROW_NUMBER()over(order by AcademeID) as hh,AcademeID,AcademeName,AcademeCode from SYS_Academe)u where hh BETWEEN '"+start+"' and '"+end+"'",function (err,data) {//测试是否可以接受上边声明的条数，是否正确
//         sql.query("SELECT (select count(*) as RecordCount from SYS_Academe) as count, * FROM (SELECT ROW_NUMBER() OVER (ORDER BY AcademeID) AS ROW_NUMBER, * FROM SYS_Academe AS t0) AS t1 WHERE t1.ROW_NUMBER BETWEEN'"+start+"' and '"+end+"'",function (err,data) {
//       if (err){
//         console.log(err);
//       } else {
//         res.render("a",{departmentList:data.recordset,pagenum:pagenum})
//           sql.close()
//       }
//     })
//   })

// });

  module.exports=router;