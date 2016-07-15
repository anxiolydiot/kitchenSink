
module.exports =
io = require('socket.io-client')('http://localhost');
io.on('connect', function(){});
io.on('event', function(data){});
io.on('disconnect', function(){});
