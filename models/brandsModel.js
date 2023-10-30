const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const brandsSchema = new Schema({
	'brands' : Array,
	'type' : String
});

module.exports = mongoose.model('brands', brandsSchema);
