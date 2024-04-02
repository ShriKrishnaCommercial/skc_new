const mongoose = require('mongoose');

const leaderModel = new mongoose.Schema({
    name: String,
    role: String,
    imageUrl: String
})

module.exports = mongoose.model('leaders', leaderModel);