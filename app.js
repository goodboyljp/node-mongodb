var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routers/router');
// var settings = require('./settings');
var flash = require('connect-flash');
var multer  = require('multer');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/static', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//   resave: false,  
//   saveUninitialized: true, 
//   secret: settings.cookieSecret,
//   key: settings.db,//cookie name
//   cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
//   store: new MongoStore({
//     db: settings.db,
//     host: settings.host,
//     port: settings.port
//   })
// }));
app.use(multer({
  dest: './public/images',
  rename: function (fieldname, filename) {
    return filename;
  }
}));
routes(app);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.sendfile("./views/error.html");
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.sendfile("./views/error.html");
});
module.exports = app;