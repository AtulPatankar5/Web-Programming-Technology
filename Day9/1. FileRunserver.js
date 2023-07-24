let http=require("http")
let fs=require("fs")

function handleReq(req, res){
   
    res.writeHead( 200, {
                 "Content-Type": "text/html" });

    fs.readFile("./hello.html",(err,data)=>{
        if (err) {
            // If an error occurs while reading the file, respond with an error message.
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
        } 
        else{
            res.write(data);
            res.end();
        }
    })
}

let server=http.createServer(handleReq);
// server.listen(port,ip-address)
server.listen(3000,"localhost")
// server.listen(3000,"127.0.0.1")
console.log('Server running at http://127.0.0.1:3000/');