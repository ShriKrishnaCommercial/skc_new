//created on 12/10/23 14:44:04

//created by Yash chowdhari 
//Email :- yashc1999@gmail.com
//skc_new

const mongoose = require('mongoose');

const aboutUsSchema = new mongoose.Schema({
    about_us: {
        type: String, required: true,
    }, data: {
        type: String, required: true,
    }, why_choose_us: [{
        name: {
            type: String, required: true,
        }, description: {
            type: String, required: true,
        },
    },],
});

const homemodel = mongoose.model('home', aboutUsSchema, "home");

module.exports = homemodel;
