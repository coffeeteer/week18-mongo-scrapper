var mongoose = require('mongoose');
var schema = mongoose.Schema;

var NoteSchema = new Schema({
	title: {
		type: String
	},

	body: {
		type: String
	}
});