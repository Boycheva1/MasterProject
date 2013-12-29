
/**
 * Module dependencies.
 */

var express = require('express');
var express = require('express');
var app = express();
var http = require('http')
var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

var io = require("socket.io").listen(server);


io.sockets.on('connection', function (socket) {

  socket.on('send', function () {
    socket.broadcast.emit('rec');

  }); // send

});  // connection

server.listen(8080);
