const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    googleID: String,
});

module.exports = mongoose.model('users', userSchema);