var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') { 
        res.writeHead(200); 
        res.end();
    } else {
        res.end('Invalid Request!');
    }

});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')