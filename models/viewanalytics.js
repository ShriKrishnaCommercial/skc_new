var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    "country_code": String,
    "country_name": String,
    "city": String,
    "postal": String,
    "latitude": String,
    "url":String,
    "longitude": String,
    "IPv4": String,
    "state": String
}, { timestamps: true });
//
// var vamodel = mongoose.model('viewanalytic', userSchema, 'viewanalytic');

module.exports = mongoose.model('viewanalytic', userSchema, 'viewanalytic');
