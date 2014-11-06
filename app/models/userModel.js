/**
 * Created by Joeri Smits on 06/11/2014.
 */

var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    prefix: String,
    lastName: String,
    email: String,
    VID: Number,
    dateOfBirth: String,
    country: String
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema, 'Users');