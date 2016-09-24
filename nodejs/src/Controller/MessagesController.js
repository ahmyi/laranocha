var model = require('Model/AppModel');
var Controller = function(request,response){
    var self = this;
    this.add = function(e){
//        model.mysql.exec("INSERT INTO messages (to_id, from_id, message)VALUES (value1, value2, value3,...)")
         response.sent(e.message);    
    }
    return self;
};
module.exports = Controller;