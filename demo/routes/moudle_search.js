let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.render('moudle_search');
});
module.exports=router;