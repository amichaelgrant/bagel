/**
 * @module Bagel.js
 * @description Bagel API endpoints; Any request to access API goes through this layer
 *              before being forwarded to appropriate functions
 * @author Michael Grant <ulermod@gmail.com>
 */

var express = require('express');
var router  = express.Router();
var bModel  = require('../Models/Bagel');

/**
 * @description Rewrites the API response
 * @param {Object} res 
 * @param {Object} err 
 * @param {Object} result 
 */
function renderApiResponse(res, err, result){
    if(err) return res.json({error: true, message: err.message});
    else return res.json({item: result});
};



/**Fetch */
router.get('/:id', function(req, res, next) {
    return bModel.Fetch(req.params.id, function(err, result){
        return renderApiResponse(res, err, result);
    });
});
/**Create */
router.post('/', function(req, res, next) {
    return bModel.Create(req.body, function(err, result){
        return renderApiResponse(res, err, result);
    });
});
/**Update */
router.put('/:id', function(req, res, next) {
    return bModel.Update(req.params.id, req.body, function(err, result){
        return renderApiResponse(res, err, result);
    });
});
/**Delete */
router.delete('/:id', function(req, res, next) {
    return bModel.Delete(req.params.id, function(err, result){
        return renderApiResponse(res, err, result);
    });
});
/**List */
router.get('/', function(req, res, next) {
    return bModel.List(req.query, function(err, result){
        return renderApiResponse(res, err, result);
    });
});

module.exports = router;