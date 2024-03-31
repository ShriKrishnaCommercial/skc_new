const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const faqSchema = new Schema({
	'product_id' : String,
	'question' : String,
	'answer' : String
});

module.exports = mongoose.model('faq', faqSchema);
