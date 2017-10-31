var http = require('http');


var server = http.createServer(function(req, res) {

//res.writeHead(200);
res.writeHead(200, {"Content-Type": "text/html"});

//res.end('Hi everybody!');
res.end('<p>Here is a paragraph of <strong>HTML</strong>!</p>');

});

server.listen(8080);

/*
// Code exactly the same as the previous one
var instructionsNewVisitor = function(req, res) {
res.writeHead(200);
res.end('Hi everybody!');
}
var server = http.createServer(instructionsNewVisitor);
*/