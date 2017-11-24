/**
 * @module Bagel.js
 * @description Core Bagel functions
 * Bagel{
 *      Id              {Number}
 *      Name            {String}
 *      Age             {Number}
 *      Gender          {String}
 *      LastLocation    {Number}
 *      Latitude        {Number}
 *      Longitude       {Number}
 * }
 */
var debug               = require("debug")("Bagel:Models/Bagel");
var db                  = global.db.collection("Bagel");
var isValidAge          = require("./Validation").isValidAge;
var isNotProperRange    = require("./Validation").isNotProperRange;
var parseToInt          = require("./Validation").parseToInt;
var parseToFloat        = require("./Validation").parseToFloat;
var isValidPoint        = require("./Validation").isValidPoint;
var isValidDistance     = require("./Validation").isValidDistance;
var parseLatitude       = require("./Validation").parseLatitude;
var parseLongitude      = require("./Validation").parseLongitude;
var pageSize            = 10;

/**@example 
 * @param {String} Id
 * @param {Function} Callback
 * @return A Bagel object on success or an error object on failure
 */
exports.Fetch = function(Id, Callback){};

/**@example 
 * @param {Object} Bagel 
 * @param {String} Bagel#ID ?? 
 * @param {Function} Callback
 * @return A Bagel object on success or an error object on failure
 */
exports.Create = function(Bagel, Callback){};

/**@example 
 * @param {String} Id - Bagel ID
 * @param {Object} Bagel 
 * @param {String} Bagel#ID 
 * @param {Function} Callback
 * @return Updated bagel object on success or an error object on failure
 */
exports.Update = function(Id, Bagel, Callback){};

/**@example 
 * @param {String} Id
 * @param {Function} Callback
 * @return A bagel object on success or an error object on failure
 */
exports.Delete = function(Id, Callback){};

/**@example 
 * @param {Object} Filter - Filtering parameters
 * @param {String} Bagel#ID 
 * @param {Function} Callback
 * @return A list of bagels on success or an error object on failure
 */
exports.List = function(Filter, Callback){
    try{
        if(Filter.gender && (Filter.gender === "f" || Filter.gender === "m"))
            Query.Gender = Filter.gender;
        if(Filter.min_age && isValidAge(Filter.min_age)) 
            Query.Age = {};
        if(Filter.max_age && isValidAge(Filter.max_age))
            Query.Age = {};
        if(Filter.min_age && Filter.max_age){
            if(isNotProperRange(Filter.min_age, Filter.max_age))
                delete Query.Age;
        };
        if(
            (Filter.origin && isValidPoint(Filter.origin)) &&
            (Filter.dist   && isValidDistance(Filter.dist))
        ){
            Query.Latitude = 0;
        }
    }catch(exx){
        return Callback(exx);
    };
    
    var Query = {};
    var SortAndPage = {};
    db.count(Query, function(err, size){
        db.find(Query, {}, SortAndPage).toArray(function(err, result){
            return Callback(err, { Items: result, Size:size, Page:0 });
        });
    });
};