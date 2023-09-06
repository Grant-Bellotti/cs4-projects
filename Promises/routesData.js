let path = require("path");
let express = require("express");
var passport = require("passport");

//added below for mongo
//var mongoose = require("mongoose");
//var Info = require("./models/Info");
var User = require("./models/user");

//added above for mongo

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();




router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

//request is info sending to server from client.
//response is info sending to client from server.

//router.get("/",function(req,res){
//	res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
//});

//added below for mongo
const myDatabase = require('./myDatabase');
//added above for mongo

let db = new myDatabase();
const Student = require('./Student');


router.get('/read', function(req, res){
	if (req.isAuthenticated()) {
		return(db.getStudent(req.user.ident,res));
	}
	else
		res.json(null);
});


router.get('/readAdmin', function(req, res){
	if (req.isAuthenticated()) {
		if (req.user.username == "admin")
		{

//added below for mongo	

console.log("readAdmin " + req.query.ident);
		return(db.getStudent(req.query.ident,res));
		}
		else
			res.json(null);
	}
	else
		res.json(null);
});





router.post('/create', function(req, res){

	if (req.isAuthenticated()) {

		if (req.body.name == "") {
			res.json(null);
			return;
		}

		if (req.user.username == "admin") {
			res.json(null);
			return;
		}

		console.log(req.body.grade);
		console.log(req.body.volleyball);

//added below for mongo		
	let obj = new Student(req.user.ident,req.user.username,req.body.grade,req.body.volleyball,
		req.body.basketball,req.body.soccer);
		return(db.postStudent(obj,res));	

	}
	else
		res.json(null);
});



router.put('/updateAdmin', function(req, res){

	if (req.isAuthenticated()) {


console.log(req.body.ident);
console.log(req.body.name);
console.log(req.body.grade);


		if (req.body.name == "") {
			res.json(null);
			return;
		}
//added below for mongo		
	let obj = new Student(req.body.ident,req.body.name,req.body.grade,req.body.volleyball,req.body.basketball,req.body.soccer);
		return(db.putStudent(obj,res));
	}
	else
		res.json(null);
});



router.put('/update', function(req, res){

	if (req.isAuthenticated()) {

		if (req.body.name == "") {
			res.json(null);
			return;
		}
//added below for mongo		
	let obj = new Student(req.user.ident,req.user.username,req.body.grade,req.body.volleyball,req.body.basketball,req.body.soccer);
		return(db.putStudent(obj,res));

	}
	else
		res.json(null);
});


//router.delete('/delete/:identifier', function(req, res){
////added below for mongo	
//	return( db.deleteStudent(req.params.identifier,res));
////added above for mongo
//});


router.get("/userInfo",function(req,res){
      console.log("top userInfo");
  if (req.isAuthenticated()) {
      console.log("userInfo is auth");
      db.getStudent(req.user.ident,res);
	}
	else {
		res.json(null);
	}
});


module.exports = router;

