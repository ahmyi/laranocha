require('app-module-path').addPath(__dirname + '/src');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


//var AppController = require("Controller/AppController.js");

server.listen(8080);

//var controller = new AppController(io);

io.on('connection', function (socket) {
       
        socket.on('disconnect',function(e){
            console.log("Disconnected");
        });
        socket.on('request',function(data){
            
            var controller = data.controller;
            
            controller = require('Controller/'+controller+'Controller.js');
            
            var fnc = data.action || 'index';
            
            var msg = data.data || {};
            console.log(data.session+":"+msg);
            var req = {
                controller : data.controller,
                action : fnc,
                data:msg,
                session: data.session
            };
            var res = {
                sent:function(resp){
                     io.emit('response',{
                        session:data.session,
                         message:resp
                     });
                }
            };
            controller = new controller(req,res);
            var fn = controller[fnc];
            
            if (typeof fn === "function"){
                try{
                    fn(msg);                    
                }catch(e){
                    console.log(e);
                }
            } 
            else {
                console.log('Invalid request');    
            }            
        });
});