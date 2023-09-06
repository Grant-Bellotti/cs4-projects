var mongoose = require("mongoose");

var Data = mongoose.model("Info",{
  name: String,
  grade: Number,
  opt1: Boolean,
  opt2: Boolean,
  opt3: Boolean

});

module.exports = Data;
