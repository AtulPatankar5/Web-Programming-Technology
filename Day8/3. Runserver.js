var http=require("http")

function handleReq(req, res){
    var d1= new Date();
    var body = "<html><body bgcolor='lightgreen'>";
    body+="<h1> Hello World</h1> <br> Today is:"+d1;
    body+="</body></html>"
    
    var content_length = body.length ;
    res.writeHead( 200, {
                "Content-Length": content_length,
                "Content-Type": "text/html" });

    res.end(body);
}


let server=http.createServer(handleReq);
// server.listen(port,ip-address)
server.listen(3000,"localhost")
// server.listen(3000,"127.0.0.1")
console.log('Server running at http://127.0.0.1:3000/');