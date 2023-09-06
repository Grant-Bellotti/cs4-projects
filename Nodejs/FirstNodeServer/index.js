var http = require("http");

function requestHandler(req,res) {
  console.log("In comes a request to: " + req.url);

    res.end("Hello World");
}
var server = http.createServer(requestHandler);
server.listen(3000);
