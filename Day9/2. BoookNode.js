var http = require('http');
var url = require('url');
var fs = require('fs');

function process_request(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end("404 Not Found");
            }
        res.writeHead(200, {
            'Content-Type': 'text/html'});
        res.write(data);
         
    });
}

var s = http.createServer(process_request);
s.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');