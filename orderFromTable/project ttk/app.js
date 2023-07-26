var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');
var tiffinsRouter = require('./routes/tiffinsmenu');
var lunchRouter = require('./routes/lunchmenu');
var drinksRouter = require('./routes/drinksmenu');
var kitchenRouter = require('./routes/kitchen');

// db connection-1
var mongoose=require("mongoose");
const url="mongodb://0.0.0.0/projectTTK"
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function(){
  console.log("connected to project TTK database")
})


var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/',ordersRouter);
app.use('/',tiffinsRouter);
app.use('/',lunchRouter);
app.use('/',drinksRouter);
app.use('/',kitchenRouter)


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
