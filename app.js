// Load core Express dependencies and HTTP utility modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import custom application routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Instantiate Express application
var app = express();

// Configure View Engine: set template directory and specify EJS templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Register middleware for request logging, body parsing, and cookies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static assets (CSS, JS, images) publicly from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount route handlers to specific URL paths
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 errors and forward them to error handling middleware
app.use(function(req, res, next) {
  next(createError(404));
});

// Global error handler middleware
app.use(function(err, req, res, next) {
  // Set locals, providing detailed error stack only during development environment
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render error template with status code
  res.status(err.status || 500);
  res.render('error');
});

// Export configured application object
module.exports = app;
