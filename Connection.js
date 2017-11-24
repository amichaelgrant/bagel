/**
 * @module Connection.js
 * @description Used for establishing a connection to MongoDB
 * @author Michael Grant <ulermod@gmail.com>
 */
var debug       = require("debug")("Bagel:Connection");
var mongo       = require('mongodb').MongoClient;
var deasync     = require('deasync');
var MONGO_URL   = require('./Configuration').MONGO_URL;

var done = false;
var Callback = function(err, indexname) {
    debug(err, indexname);
};
var Options = {};

module.exports = function(){
     mongo.connect(MONGO_URL, Options, function(err, db){
         debug('Mongo connect# ', err);
         if(err) throw err;
        
         global.db = db;
         done = true;

    }.bind(this));
    deasync.loopWhile(function(){ return !done});
};