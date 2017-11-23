/**
 * @module
 * @description Core Bagel functions
 * Bagel.js
 */
var debug = require("debug")("Bagel:Models/Bagel");


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
exports.List = function(Filter, Callback){};