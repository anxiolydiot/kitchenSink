var unique = require('uniq');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var PORT = 4000;
var Sequelize = require("sequelize");
var _ = require('lodash');
var routes = require('./routes/index');
var cheerio = require('cheerio');
var request = require('request');
var app = express();
var models = require('./models');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Message = require('./models/Message.js');




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
// app.use('/', routes);
app.use(require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

io.on('connect', function(socket){
  console.log('connected');
  socket.on('disconnect', function(){
    console.log('disconnect');
  });
  socket.on('message', function(data){
    console.log('this is data:' +  data);
    io.emit('message', {message: data.message});
    console.log(data.message);
// var newMessage = new Message({message:data.message});
// newMessage.create({message: data.message}, function (err){

//   if(err){
//     console.log (err);
//   } else{
//     console.log('message saved');
//   }
// });

  });
});




models.sequelize.sync().then(function() {
  http.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
  });

});


module.exports = app;
