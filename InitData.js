/**
 * @module InitData.js
 * @description Pre-populates DB with test data
 * @author Michael Grant <ulermod@gmail.com>
 */

require("./Connection")();
var debug   = require("debug")("Bagel:InitData");
var db      = global.db.collection("Bagels");
var uuid    = require("uuid").v4;

var bagels = [
    {Id: 1, Name: "Taylor Swift", Age: 27, Gender: "f", LastLocation: "San Fransico", Latitude: 37.774929, Logitude: -122.419416 },
    {Id: 1, Name: "Taylor Swift", Age: 27, Gender: "f", LastLocation: "Oakland", Latitude: 36.244273, Logitude: -120.49804 },
    {Id: 2, Name: "Kevin Spacey", Age: 58, Gender: "m", LastLocation: "Washington-DC", Latitude: 38.895650, Logitude: -76.943174 },
    {Id: 3, Name: "Emma Watson",  Age: 28, Gender: "f", LastLocation: "Los Angeles", Latitude: 34.062264, Logitude: -118.340361 },
    {Id: 3, Name: "Emma Watson",  Age: 28, Gender: "f", LastLocation: "Daly City", Latitude: 37.689410, Logitude: -122.462532 },
    {Id: 4, Name: "Emilia Clarke",Age: 30, Gender: "f", LastLocation: "Los Angeles", Latitude: 34.043566, Logitude: -118.391092 },
    {Id: 5, Name: "Chris Martin", Age: 40, Gender: "m", LastLocation: "Whitestone, UK", Latitude: 0, Logitude: 0 },
];

var index = bagels.length;

debug("Starting DB population with data", db);

function populate(){
    if(--index < 0){
        debug("Done populating DB with test data");
        return process.exit(0);
    };
    db.insert(bagels[index], function(err, result){
        if(err){
            debug("populate error# ", err);
            return;
        }
        debug("Inserted bagel# ", index, bagels[index]);
        populate();
    });
};

populate();