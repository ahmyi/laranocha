var socket;
var io;
var formatAMPM= function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + sec + ' ' + ampm;
    return strTime;
};
var ChatController = function(_io) {
    var self = this;
    io = _io;
    self.setSocket=function(s){
        socket = s;
      
        io.emit('this', { will: 'be received by everyone'});
        console.log('ChatController Init');
        socket.on('disconnect',function(e){
           self.close();
        });
        socket.on('getUser',function(){
            self.getUser();
        });
        socket.on('getChat',function(){
            self.getChat();
        });
    
    };
    self.getUser= function () {
        // connection.connect();
//        connection.query('SELECT * FROM users', function(err, rows, fields) {
//            if (err) {throw err};
//            console.log('The solution is: ', rows[0].id);
//        });
        // connection.end();
    };
    self.getChat= function () {
        setInterval(function () {
            ///none
        }, 1000)
    };
    self.sendChat= function (tweet) {
        socket.volatile.emit('friendsChat', tweet);
    };
    self.close = function(){
        console.log('a user disconnected');
    };
    
    return this;
}
    
module.exports = ChatController;