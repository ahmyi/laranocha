require('app-module-path').addPath(__dirname + '/src');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var AppModel = require("Model/AppModel.js");
var ChatController = require("Controller/ChatController.js");

server.listen(8080);

var chat = new ChatController(io);

io.on('connection', function (socket) {
    chat.setSocket(socket);
    
});