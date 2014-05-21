var config = require('./config');

// --- modules and setup
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logMiddleware = require('morgan');
var debug  = require('debug')(config.package);
//https://github.com/expressjs/cookie-parser
var cookieParser = require('cookie-parser');
//https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');
// https://github.com/expressjs/session
var session = require('express-session');
var passport = require('passport');


var app = express();
var port= process.env.PORT || 3003;
var vip = "0.0.0.0";

// view engine setup  --------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app configurations -------
app.use(favicon());
app.use(logMiddleware('dev'));
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session and passport configuration
app.use(session({secret : "tweet"}));
app.use(passport.initialize());
app.use(passport.session());

// middleware and routes -------------
require('./routes')({
    "app" : app,
    "express" : express,
    "passport": passport
});
require('./middleware/errorFilter')(app);

// Startup
app.listen(port, vip,  function() {
  debug('Express server listening on port ' + port);
});
