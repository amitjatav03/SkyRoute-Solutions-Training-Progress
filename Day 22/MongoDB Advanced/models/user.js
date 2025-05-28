const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testingadvdbcommands');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    age: String,
    isMarried: Boolean,
    email: String,
    isAdmin: Boolean // yeh field baad mai add ki gayi haii
});

module.exports = mongoose.model('User', userSchema);