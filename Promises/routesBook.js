
let path = require("path");
let express = require("express");
var passport = require("passport");

var Promise = require('promise');

//added below for mongo
//var mongoose = require("mongoose");
var User = require("./models/user");
var BookModel = require("./models/Book");

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
const myDatabaseBook = require('./myDatabaseBook');
//added above for mongo

let dbBook = new myDatabaseBook();
const Student = require('./Student');
const Book = require('./Book');


var identBook = 0;
function initIdentBook(){
	return new Promise(function(resolve,reject) {
		if (identBook == 0) {
			BookModel.find({},function(err,user) {
				console.log("BookModel.find()");
				if (err) {
					reject(err);
				}
				else {
					for (let i=0;i<user.length;i++) {
						if (identBook < user[i].ident) {
							identBook = user[i].ident;
						}
					}
					identBook++;
					console.log("identBook = " + identBook);
					resolve(identBook);
				}      
			});    
		}
		else {
			identBook++;
			console.log("identBook = " + identBook);
			resolve(identBook);
		}
	});
}

router.post('/createBook', function(req, res){
console.log("in post createBook");


	if (req.isAuthenticated()) {

		console.log(req.body.title);
		console.log(req.body.author);
		console.log(req.body.pages);		
		if (req.body.title == "") {
			res.json({retVal:null});
			return;
		}

		console.log(req.user.username);		
		if (req.user.username != "librarian") {
			console.log("bad username");	
			res.json({retVal:null});
			return;
		}

		
//		initIdentBook();
	  var Prom1 = initIdentBook();
	  Prom1.then(
	  	function(result) {
			console.log("identBook = " + identBook);
		  if (identBook == 0)
		  {
			res.json({retVal:null});
			return;
		  }
		  let obj = new Book(identBook,req.body.title,req.body.author,req.body.pages);
		  console.log(obj);		
		  console.log("will do dbBook.postBook");		
		  return(dbBook.postBook(obj,res));	
	    },
	    function(err) {
	      console.log("error");
	      res.json({retVal:null});
	    }	    
	  );


	}
	else
		res.json({retVal:null});
});


router.get("/listBook",function(req,res){
      console.log("top listBook");
  if (req.isAuthenticated()) {
      console.log("userInfo is auth");
      dbBook.getBooks(res);
	}
	else {
		res.json({retVal:null});
	}
});


module.exports = router;

