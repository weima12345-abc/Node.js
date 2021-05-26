var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');

var session=require("express-session");
var LoginRouter=require('./routes/relogin');
// var loginRouter = require('./routes/login');
var zcRouter = require('./routes/zc1');
var dtxrRouter=require('./routes/dtxr');
var ind3Router=require('./routes/moudle_search');
var ind2Router=require('./routes/search');
var ind1Router=require('./routes/dbutils');
var indRouter=require('./routes/login');
var test3Router=require('./routes/test3');
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
cookie:{maxAge:60000}
}));

app.use('/Login',LoginRouter);
// app.use('/', loginRouter);
app.use('/zc', zcRouter);
app.use('/dtxr',dtxrRouter);
app.use('/e',ind3Router);
app.use('/d',ind2Router);
app.use('/c',ind1Router);
app.use('/b',indRouter);
app.use('/',test3Router);
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
