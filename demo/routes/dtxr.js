let express=require('express');
let router=express.Router();
router.get('/',(req,res)=>{
    res.render('add',{ obj:{}, 
    id:""});
});

router.get('/person_add',(req,res)=>{
  res.render('person_add',{obj:{},id:""});
});

  module.exports=router;