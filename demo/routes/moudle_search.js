let express=require('express');
let router=express.Router();


//sql 查询 book
router.get('/',(req,res)=>{
    res.render('moudle_search');
});


//sql 查询 user
router.get('/search_user',(req,res)=>{
    res.render('moudle_search1');
});
module.exports=router;