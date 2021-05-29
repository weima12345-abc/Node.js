var express = require('express');
var router = express.Router();
var crypto=require('crypto');
/* GET home page. */
router.get('/', (req, res)=> {
  res.render('Login');
}); 
 

router.post('/',(req,res)=>{
  exports.checkAuth=function(req, res, next) {
    var token = req.signedCookies.token;
    if (token && req.session.user && req.session.user.token === token)
        next();
    else if (token) {
        //if invalid token or no session, should rebuild
        var authInfo = user.getAuthInfo(token);
        if (authInfo && authInfo.isAuth) {
            req.session.user = {
                // userID: authInfo.userID,
                // userName: authInfo.userName,
                // isAuth: authInfo.isAuth,
                // token: token
                name:authInfo.name,
                password:authInfo.password
            }
            next();
  
        } else
            res.redirect('/Login');
    } else
        // res.redirect('/Login');
        res.send("上单");
  }
  
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
  // window.location.href='/asd';
  res.redirect('/Login');


 // 设置路由拦截器
// Vue.mixin({
//   beforeRouteLeave(to, from, next) {
//     if(this.interceptRouter){
//       next((()=>{
//         MessageBox.confirm('你可能有修改未提交，确定返回上级页面？').then(()=>{
//           this.interceptRouter = false;
//           this.$router.go(-1)
//         }).catch(()=>{
          
//         })
//         return false;
//       })())
//     }else{
//       next()
//     }
//   }
// })
  

 }

})

module.exports = router;
