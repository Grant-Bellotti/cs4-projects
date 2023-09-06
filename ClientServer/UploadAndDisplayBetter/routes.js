let path = require("path");
let express = require("express");
var formidable = require('formidable');
var mv = require('mv');

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
let router = express.Router();

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});

let filename2;

router.post('/fileupload', function(req, res) {
    console.log("router.post fileupload");
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.image.path;
        var newpath = __dirname + '/public/images/' + files.image.name;
        console.log('Received image: ' + files.image.name);
        mv(oldpath, newpath, function (err) {
//            if (err) throw err;
            if (err)
                res.json({error:true});
            else
                res.json({error:false,filename2: files.image.name });
        });
    });
});

router.post('/create', function(req, res){

    filename2 = req.body.filename2.trim();
    if (filename2 == "") {
        res.json({error:true});
        return;
    }

    res.json({error:false,filename2:filename2});

});

router.get('/read', function(req, res){

    if (filename2 == null)
        res.json({error:true});
    else
        res.json({error:false,filename2:filename2});

});

module.exports = router;
