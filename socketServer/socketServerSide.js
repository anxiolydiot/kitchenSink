var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

module.exports.socketInit = function(app){

io.on('connect', function(socket){
  console.log('connected');
  socket.on('disconnect', function(){
    console.log('disconnect');
  });
  socket.on('message', function(data){
    io.emit('message', {message: data.message});
    console.log(data.message);
  });
});

};



