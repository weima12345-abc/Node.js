var express = require('express');
var router = express.Router();
let User=require('./bean/user');
/* GET home page. */
router.get('/', (req, res)=> {
  res.render('zc');
}); 
// router.post('/',(req,res)=>{
// let user= new User(req.body.name,req.body.password,req.body.email,req.body.phone,req.body.create_time,req.body.update_time);
// req.session.user=user; 
//  res.redirect('Login');
// });
module.exports = router;
