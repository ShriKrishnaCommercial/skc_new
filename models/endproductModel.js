const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const endproductSchema = new Schema({
	'name' : String,
	'image' : String,
	'info' : String,
	'partner' : String,
	'Highlights' : String,
	'category' : String,
});

module.exports = mongoose.model('endproduct', endproductSchema);
