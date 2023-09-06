var path = require("path");
var express = require("express");
var passport = require("passport");

var Info = require("./models/Info");
var User = require("./models/user");

var router = express.Router();
const Student = require('./Student');

//function ensureAuthenticated(req, res, next) {
//  if (req.isAuthenticated()) {
//    next();
//  } else {
//    req.flash("info", "You must be logged in to see this page.");
//    res.redirect("/login");
//  }
//}

router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});



var ident = 0;

function initIdent(){
  if (ident == 0)
  {
    User.find({},function(err,user) {
      if (!err) {
        let objs = [];
        for (let i=0;i<user.length;i++) {
          if (ident < user[i].ident)
            ident = user[i].ident;
        }
      }
    });    
//    ident = 3;   //this was temp to check if User.find above is an issue.
  }
}


router.get("/successroot", function(req, res) {
console.log("get successroot");
	res.json({redirect:"/"});	
});

router.get("/failroot", function(req, res) {
console.log("get failroot");
	res.json({redirect:"/login"});	
});

router.get("/successsignup", function(req, res) {
console.log("get successsignup");
      res.json({redirect:"/session"});    
});

router.get("/failsignup", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});	
});

router.get("/successlogin", function(req, res) {
console.log("get successlogin");
      res.json({redirect:"/session"});    
});

router.get("/faillogin", function(req, res) {
console.log("get faillogin");
	res.json({redirect:"/login"});	

});



router.get("/", function(req, res, next) {
console.log("get root");

	let thePath = path.resolve(__dirname,"public/views/login.html");		
	res.sendFile(thePath);	

 // User.find()
 // .sort({ createdAt: "descending" })
 // .exec(function(err, users) {
 //   if (err) { return next(err); }
 //   res.render("index", { users: users });
 // });
});


router.get("/signup", function(req, res) {
console.log("get signup");
  initIdent();

	let thePath = path.resolve(__dirname,"public/views/signup.html");		
	res.sendFile(thePath);	

});

router.get("/login", function(req, res) {
console.log("get login");

	let thePath = path.resolve(__dirname,"public/views/login.html");		
	res.sendFile(thePath);	

});


router.get("/session", function(req, res) {
  console.log("get session");
  if (req.isAuthenticated()) {

    if (req.user.username == "admin")
    {
       let thePath = path.resolve(__dirname,"public/views/adminsession.html");   
       res.sendFile(thePath); 
    }
    else if (req.user.username == "librarian")
    {
       let thePath = path.resolve(__dirname,"public/views/librariansession.html");   
       res.sendFile(thePath); 
    }    
    else
    {
	     let thePath = path.resolve(__dirname,"public/views/session.html");		
	     res.sendFile(thePath);	
     }
  } else {
  	let thePath = path.resolve(__dirname,"public/views/login.html");		
	res.sendFile(thePath);	
  }
});






router.get("/adminInfo",function(req,res){

  if (req.isAuthenticated()) {

        if (req.user.username == "admin")
        {
            initAdmin(req,res);
        }
        else
          res.json(null);          

  }
  else {
    res.json(null);
  }
});


router.get("/librarianInfo",function(req,res){

  if (req.isAuthenticated()) {

        if (req.user.username == "librarian")
        {
            initLibrarian(req,res);
        }
        else
          res.json(null);          

  }
  else {
    res.json(null);
  }
});


//==================

function initAdmin(req,res) {
  console.log("initAdmin");
  console.log(req.user.ident);
  console.log(req.user.username);

            Info.find({},function(error,info) {
              if (error) {
                return res.json(null);
              } else {
                let list = [];
                for (let i=0;i<info.length;i++) {
                  list.push({ident:info[i].ident,name:info[i].name});
                }
                res.json ({ ident:req.user.ident,username: req.user.username,userList:list});
              }
            });
}


//==================

function initLibrarian(req,res) {
  console.log("initLibrarian");
  console.log(req.user.ident);
  console.log(req.user.username);

            Info.find({},function(error,info) {
              if (error) {
                return res.json(null);
              } else {
                let list = [];
                for (let i=0;i<info.length;i++) {
                  list.push({ident:info[i].ident,name:info[i].name});
                }
                res.json ({ ident:req.user.ident,username: req.user.username,userList:list});
              }
            });
}

//==================




router.get("/logout", function(req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    res.redirect("/successroot");
  } else {
    res.redirect("/failroot");
  }
});


router.post("/signup", function(req, res, next) {
console.log("post signup");

  var username = req.body.username;
  var password = req.body.password;
  ident++;

  User.findOne({ username: username }, function(err, user) {

    if (err) { return next(err); }
    if (user) {
      req.flash("error", "User already exists");
      return res.redirect("/failsignup");
    }

    var newUser = new User({
      username: username,
      password: password,
      ident: ident
    });
    newUser.save(next);    //this line has to be called.
  });


}, passport.authenticate("login", {
  successRedirect: "/successsignup",
  failureRedirect: "/failsignup",
  failureFlash: true
}));




router.post("/login", passport.authenticate("login", {
  successRedirect: "/successlogin",
  failureRedirect: "/faillogin",
  failureFlash: true
}));

module.exports = router;
