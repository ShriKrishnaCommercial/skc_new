const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const contactSchema = new Schema({
	'first_name' : String,
	'last_name' : String,
	'company' : String,
	'email' : String,
	'pno' : String,
	'message' : String
});

module.exports = mongoose.model('contact', contactSchema);
