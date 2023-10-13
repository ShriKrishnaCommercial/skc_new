var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var aboutusSchema = new Schema({
	'aboutus' : String,
	'know_who_we' : String,
	'state' : Number,
	'clients' : Number,
	'values' : String
});

module.exports = mongoose.model('aboutus', aboutusSchema);
