let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.render('moudle_search');
});
router.get('/search_user',(req,res)=>{
    res.render('moudle_search1');
});
module.exports=router;