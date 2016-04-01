var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	author: String,
	title: String,
	content: String,
	date: String,
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
});

module.exports = mongoose.model ('Post', PostSchema);