var mongoose = require("mongoose");

var Data = mongoose.model("Info",{
    ident: {
        required: true,
        unique: true,
        type:Number
    },
    name: String
});

//var Data = mongoose.model("Info",{
//    ident: Number,
//    name: String
//});


module.exports = Data;
