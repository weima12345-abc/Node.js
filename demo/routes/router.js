const express = require('express');
// const { router } = require('../app.js');
// const {router}  = require('../app.js');
// const router = require('./index.js');
const router = express.Router(); 
const service = require('./service.js');
 
// 路由处理
 

// 渲染主页
router.get('/index',service.showIndex);
// 修改图书(跳转到添加图书的页面)
router.get('/toAddBook',service.toAddBook);
//登录界面
router.get('/login',service.login);
router.get('/dtxr',service.dtxr);

// 添加图书(提交表单)
router.post('/addBook',service.addBook);
router.get('/add',service.add);
// 跳转到编辑图书信息页面
router.get('/toEditBook',service.toEditBook);
// 编辑图书提交表单
router.post('/editBook',service.editBook);
// 删除图书信息
router.get('/deleteBook',service.deleteBook);
  
module.exports = router;
