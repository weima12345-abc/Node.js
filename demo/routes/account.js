var express = require('express');
var router = express.Router();
let User=require('./bean/user');
var mysql=require('mysql');
let connection=mysql.createConnection({
  user:"root",
  password:"123456",
  database:"01"
})
/* GET home page. */
router.get('/', (req, res)=> {
  res.render('account');
}); 

                   
module.exports = router;