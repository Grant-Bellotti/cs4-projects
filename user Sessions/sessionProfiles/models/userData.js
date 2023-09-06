// mongoose is what will let us connect to our database
  var mongoose = require('mongoose');

  // Create a Student model
  // Specify type of each model variable
  var userData = mongoose.model('infos', {
    name: String,
    grade: Number,
    opt1: Boolean,
    opt2: Boolean,
    opt3: Boolean
  });

  // Set Student as our module export.
  // Now other files can require this file
  // and access the Student model and create students.
  module.exports = userData;
