const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quotesSchema = new Schema({
    'email' : String,
    'product' : String
}, {timestamps: true})

module.exports = mongoose.model('quotes', quotesSchema);