// mongoose is what will let us connect to our database
var mongoose = require('mongoose');
// our Student Object, check out Student.js
var Student1 = require('./Student');

// Use mongoose to connect to our database
mongoose.connect('mongodb://localhost/tempPrac');  //change on server

var aaroh = Student1.create({
  name: 'Aaroh',
  gradeLevel: 10,
  drives: false
});
var grant = Student1.create({
  name: 'Grant',
  gradeLevel: 12,
  drives: true
});

/*
Student1.findOne({'name': "Aaroh"}, function(err, student) {
  console.log("read");
  if (err) {
    console.log(err);
  }
  console.log('Student with name `Aaroh`:', student);
});

Student1.remove({"name":"Aaroh"},function(error,student) {
  console.log("delete");
  if (error)
    console.log(error);
  else
    console.log(student);
});

Student1.findOneAndUpdate({"name":"Grant"},{"gradeLevel":5},function(error,student) {
  console.log("update");
  if (error)
    console.log(error);
  else
    console.log(student);
});
*/
//console.log(aaroh);
