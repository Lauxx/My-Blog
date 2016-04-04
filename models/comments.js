var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	body: String, 
	date: { type: Date, default: Date.now},
	blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports = mongoose.model("Comment", CommentSchema);