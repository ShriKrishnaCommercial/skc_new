const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const clientsSchema = new Schema({
	'clients' : Array,
	'type' : String
});

module.exports = mongoose.model('clients', clientsSchema);
