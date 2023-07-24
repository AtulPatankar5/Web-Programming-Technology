var http = require('http');
var fs = require('fs');
function process_req(req, res) {
    if (req.method == 'GET' && req.url == '/') {
        fs.readFile('loginPost.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }
    else if(req.method == 'POST'){
        var body = "";
        req.on("data",function(data){
        body += data;
        res.writeHead(200, {'Content-Type': 'text/html'});
        var arr = body.split("&");
        res.write("Welcome " + arr);
        res.end();
    })
    }
}
var server = http.createServer(process_req)
server.listen(3000);
console.log('server listening on localhost:3000');