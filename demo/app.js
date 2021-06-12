var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');

var session=require("express-session");
var LoginRouter=require('./routes/relogin');


var dtxrRouter=require('./routes/dtxr');
var ind4Router=require('./routes/index2');
var ind2Router=require('./routes/search');
var f=require('./routes/dtxr');
var indentRouter=require('./routes/someindent');
var accoutRouter=require('./routes/accout');
var accountRouter=require('./routes/account');
var manage_accountRouter=require('./routes/manage_account'); 
var g_cRouter=require('./routes/g_c'); 
var manage_bookRouter=require('./routes/manage_book'); 
var manage_personRouter=require('./routes/manage_person');
var manage_p_bRouter=require('./routes/manage_p_b');


var app = express(); 




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser("djt"));
app.use(session({
secret:"djt",
resave: true,
saveUninitialized: true,
cookie:{maxAge: 1000 * 60 * 60 * 24 * 365}  
}));




app.use('/Login',LoginRouter);
app.use('/dtxr',dtxrRouter);
app.use('/d',ind2Router); 
app.use('/f',f);
app.use('/g',ind4Router);//新的home
app.use('/indent',indentRouter)
app.use('/accout',accoutRouter);
app.use('/account',accountRouter);
app.use('/manage_account',manage_accountRouter);
app.use('/g_c',g_cRouter);
app.use('/manage_book',manage_bookRouter);
app.use('/manage_person',manage_personRouter);
app.use('/manage_p_b',manage_p_bRouter);



module.exports = function (app) {
  app.get('/user/blogList',pageAdmin.checkAuth, pageAdmin.pageList);
  app.all('/user/post',pageAdmin.checkAuth, pageAdmin.pagePost);
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
