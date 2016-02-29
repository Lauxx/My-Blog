var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

//npm install bcrypt-nodejs --save
//npm install passport passport-local --save
// define the schema for our user model
//this is an authentication strategy; local is just user name and email; 
//facebook has its own authentication strategy
var userSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String,
        username     : String,
        role         : String,
        loggedIn     : Boolean
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);