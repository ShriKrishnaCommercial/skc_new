var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var brandsSchema = new Schema({
	'headline' : String,
	'brands' : Array
});

module.exports = mongoose.model('brands', brandsSchema);
