

var mongoose = require("mongoose");

var Data = mongoose.model("Info",{
	name: {
		required: true,
		unique: true,
		type:String		
	},
	grade: Number
});



module.exports = Data;



