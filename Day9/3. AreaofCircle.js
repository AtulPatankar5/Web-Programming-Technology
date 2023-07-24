var http = require('http');
var url = require('url');
var fs = require('fs');

function process_req(req, res) {
    if (req.method == 'GET' && req.url == '/') {
        fs.readFile('radius.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if(req.method == 'GET' && req.url.substring(0,8) == '/process'){
        var q = url.parse(req.url, true);
        var qdata = q.query;
        var r = qdata.radius;
        var area = Math.PI * r * r;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("The area is : " + "<h1 style='color:red;'>"+area+"<h1/>");
        res.end();
    }
    else
        res.end("not found");
}

var server = http.createServer(process_req)
server.listen(3000,"localhost");
console.log('server listening on localhost:3000');