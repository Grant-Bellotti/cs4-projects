let path = require("path");
let express = require("express");
var formidable = require('formidable');
var mv = require('mv');
let router = express.Router();

let infoList = function(name) {
    this.name = name;
}
let index = 0;

//Look at below web page for info on express.Router()
//https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4

//request is info sending to server from client.
//response is info sending to client from server.

router.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index.html"));  //changed
});
router.get("/view",function(req,res){
    res.sendFile(path.resolve(__dirname + "/public/views/index2.html"));
});

router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = __dirname + '/images/' + files.filetoupload.name;
      let picture = new infoList(files.filetoupload.name);
      infoList[index] = picture;
      index++;
      mv(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
});
router.get('/getImage', function(req, res){
  let type = Number(req.query.index.trim());
  let tempIndex = (Number(req.query.num.trim()))-1;
	if (type == 0 && infoList[tempIndex]) {
		//res.json({error:false,image:infoList[tempIndex].name});
    res.json({error:false,image:infoList[tempIndex].name});
	}
  else {
    res.json({error:true});
    return;
	}

});
router.delete('/delete/:num', function(req, res){
  let tempIndex = (Number(req.params.num.trim()))-1;
  if (req.params.num == "") {
      res.json({error:true});
      return;
  }
  if (Number.isNaN(tempIndex)) {
      res.json({error:true});
      return;
  }
  if (!infoList[tempIndex]) {
      res.json({error:true});
      return;
  }
    delete infoList[tempIndex];
    console.log(infoList);
    res.json({error:false});
});

module.exports = router;
