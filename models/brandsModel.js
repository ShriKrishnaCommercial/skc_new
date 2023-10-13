var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var brandsSchema = new Schema({
	'headline' : Number,
	'brands' : String
});

module.exports = mongoose.model('brands', brandsSchema);
