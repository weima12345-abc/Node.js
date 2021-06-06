var express = require('express');
var router = express.Router();
let User=require('./bean/user');
/* GET home page. */
router.get('/', (req, res)=> {
  res.render('zc');
}); 

module.exports = router;
