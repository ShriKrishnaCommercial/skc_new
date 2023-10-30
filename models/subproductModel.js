const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const subproductSchema = new Schema({
	'name' : String,	'category' : String,
	'image' : String
});

module.exports = mongoose.model('subproduct', subproductSchema);
