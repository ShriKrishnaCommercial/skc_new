//created on 26/10/23 14:09:26

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//skc_new

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const cvsSchema = new Schema({
    'firs_name' : String,
    'last_name' : String,
    'email' : String,
    'country' : String,
    'file' : String,
    'Street_address' : String
});

module.exports = mongoose.model('cvs', cvsSchema);
