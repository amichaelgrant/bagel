/**
 * @module Validation.js
 * @description Common validation functions
 * @author Michael Grant <ulermod@gmail.com>
 */

/**
 * @param {String} age - Tests if user supplied age is a valid age; 
 *                       is a number; is between 18 and 99 inclusive
 * @return {Boolean} - True|False
 */
exports.isValidAge = function(age){
    if(isNaN(Math.round(age))) return false;
    var nAge = parseInt(age, 10);
    return (18 <= nAge <= 99);
};

/**
 * Checks that age range is valid; 18 - 99
 * @param {String} strmin - min_age
 * @param {String} strmax - max_age
 */
exports.isNotProperRange = function(strmin, strmax){
    return (parseToInt(strmin) > parseToInt(strmax));
};

/**
 * Checks that a given origin is valid
 */
exports.isValidPoint = function(str_origin){
    var parts = str_origin.split(",", 2);
    var latitude = ( isNaN(Math.round(parts[0])) )? null : parseFloat(parts[0]);
    var longitude= ( isNaN(Math.round(parts[1])) )? null : parseFloat(parts[1]);
    return (
        (latitude && ( -90 <= latitude <= 90)) &&
        (longitude && ( -180 <= longitude <= 180))
    );
};

/**
 * Checks that a given distance is valid; in miles C = 2πr
 */
exports.isValidDistance = function(str_dist){
    if(isNaN(Math.round(str_dist))) return false;
    var dist = parseFloat(dist);
    return ( 0<= dist <=(2 * Math.PI * 3959))
};

exports.parseToInt = function(str){
    try{ return parseInt(str, 10)}
    catch(exx){ return null};
};

exports.parseToFloat = function(str){
    try{ return parseFloat(str)}
    catch(exx){ return null};
};

exports.parseLatitude = function(str_origin){
    var parts = str_origin.split(",", 2);
    return parseFloat(parts[0]);
};

exports.parseLongitude = function(str_origin){
    var parts = str_origin.split(",", 2);
    return parseFloat(parts[1]);
};

/**
 * Haversine formula
 * See https://www.movable-type.co.uk/scripts/latlong.html
 * a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 * c = 2 ⋅ atan2( √a, √(1−a) )
 * d = R ⋅ c
 */
exports.toDistance = function(lat1, lng1, lat2, lng2){

};