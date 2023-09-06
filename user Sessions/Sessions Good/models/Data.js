var mongoose = require("mongoose");

var Data = mongoose.model("Info",{
  name: String,
  grade: Number

});

module.exports = Data;
