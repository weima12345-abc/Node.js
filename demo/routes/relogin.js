var express = require('express');
var router = express.Router();
var crypto=require('crypto');
/* GET home page. */
router.get('/', (req, res)=> {
  res.render('Login');
}); 
 

router.post('/',(req,res)=>{ 
   // 设置路由拦截器
  exports.checkAuth=function(req, res, next) {
    var token = req.signedCookies.token;
    if (token && req.session.user && req.session.user.token === token)
        next();
    else if (token) {
        var authInfo = user.getAuthInfo(token);//读取用户信息
        if (authInfo && authInfo.isAuth) {
            req.session.user = {
                name:authInfo.name,
                password:authInfo.password
            }
            next();
  
        } else
            res.redirect('/Login');
    } else
        res.redirect('/Login');
       
  }
  //md5 前端加密
 let name= req.body.name;
 let password=req.body.password;
var hash=crypto.createHash('md5');
var hash1=crypto.createHash('md5');
hash.update(password);
password=hash.digest('hex');
 if(req.session.user !=undefined&& name==req.session.user.name&&hash1.update(req.session.user.password).digest('hex')==password){
   res.redirect('/');  
 }else{
  // history.back();
  res.redirect('/Login');


 
  

 }

})

module.exports = router;
