var debug       = require("debug")("Bagel:Connection");
var mongo       = require('mongodb').MongoClient;
var deasync     = require('deasync');
var MONGO_URL   = require('./Configuration').MONGO_URL;

var done = false;
var Callback = function(err, indexname) {
    debug(err, indexname);
};

module.exports = function(){
     mongo.connect(MONGO_URL, {}, function(err, db){
         debug('Mongo connect# ', err);
         if(err) throw err;
        
         global.db = db;
         done = true;

         /**indexing here */
         db.ensureIndex("Bagel", {  Firstname: "text", Lastname:"text", Email: "text"}, Callback );
         db.ensureIndex("Bagel", "Email", { unique: true }, Callback);
    }.bind(this));
    deasync.loopWhile(function(){ return !done});
};