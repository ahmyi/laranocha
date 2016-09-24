var mysql = require('mysql');
var redis = require('redis');
var config = require('Config/database.js');
module.exports = {
    'mysql':mysql.createConnection(config.mysql),
    'redis':redis.createClient(config.redis)
    
}