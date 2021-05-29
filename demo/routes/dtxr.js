let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.render('add',{ obj:{}, 
    id:""});
});

  module.exports=router;