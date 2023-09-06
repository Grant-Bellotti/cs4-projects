const path = require("path");

let join = path.join(__dirname,'/test');
console.log("join = " + join);

let resolve = path.resolve(__dirname,'test');
console.log("resolve = " + resolve );

//.. removes one before it
//res.sendFile(path.join(__dirname,"index.html"));  //all do the same thing
//res.sendFile(path.resolve(__dirname,"index.html"));
//res.sendFile(__dirname + "/index.html");
