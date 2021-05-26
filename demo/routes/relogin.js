var express = require('express');
var router = express.Router();
var crypto=require('crypto');
/* GET home page. */
router.get('/', (req, res)=> {
  res.render('Login');
}); 
 
router.post('/',(req,res)=>{
 let name= req.body.name;
 let password=req.body.password;
var hash=crypto.createHash('md5');
var hash1=crypto.createHash('md5');
hash.update(password);
password=hash.digest('hex');
 if(req.session.user !=undefined&& name==req.session.user.name&&hash1.update(req.session.user.password).digest('hex')==password){
   res.redirect('/'); 
 }else{
   res.send("登录失败");
 }
});
module.exports = router;
