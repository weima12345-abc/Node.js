var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('Login');
}); 
 
router.post('/',(req,res)=>{
 let name= req.body.name;
 let password=req.body.password;
 if(req.session.user !=undefined&& name==req.session.user.name&&
  password==req.session.user.password){
   res.redirect('b'); 
  // res.send('登录成功');
 }else{
   res.send("登录失败");
 }
});
module.exports = router;
