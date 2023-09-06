

var mongoose = require("mongoose");

//Schema is a decription (the definition) of the mongoDB document.
var bookSchema = mongoose.Schema({
	ident: {
		required: true,
		unique: true,
		type:Number
	},
	title: String,
	author: String,
	pages: Number
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;



