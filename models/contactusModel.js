const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const contactusSchema = new Schema({
	'contactus' : Array,
	'Registered' : Array,
	'Warehouse' : Array,
	'Branch' : Array
});

module.exports = mongoose.model('contactus', contactusSchema);
