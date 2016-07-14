var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AboutMe = new Schema({
	content: String
});

module.exports = mongoose.model('AboutMe', AboutMe);