const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    userName: {type: String, required: true},
    userMail: {type: String, required: true},
    userPassword: {type: String, required: true}
});

module.exports = mongoose.model('users', usersSchema);