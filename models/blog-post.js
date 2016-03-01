var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	title: String,
	content: String,
	date: String,
});

module.exports = mongoose.model ('Post', PostSchema);