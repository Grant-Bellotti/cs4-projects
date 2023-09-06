var http = require("http");

function requestHandler(req,res) {
  console.log("In comes a request to: " + req.url);

  // control for favicon

  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    res.end();
    console.log('favicon requested');
    return;
  }


  if (req.url === "/") {
    res.end("Welcome to the home page");

res.end("<!DOCTYPE html><html><head><title>This is the title</title></head><body><div>Here is some text</div></body></html>");

//res.write("<!DOCTYPE html><html><head><title>This is the title</title></head><body><div>Here is some text</div></body></html>");
//res.end();

  } else if (req.url === "/about") {
    res.end("Welcome to the about page");
  }
  else {
    res.end("Error! File not found");
  }
}
var server = http.createServer(requestHandler);
server.listen(3000);
