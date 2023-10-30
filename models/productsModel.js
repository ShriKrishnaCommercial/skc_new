const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productsSchema = new Schema({
	'name' : String
});

module.exports = mongoose.model('products', productsSchema);
