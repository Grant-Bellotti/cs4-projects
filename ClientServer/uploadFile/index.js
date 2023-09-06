
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require("./routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/', express.static('./'));
app.use(routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

