let express=require("express")

let app=express();

var path = require('path');

app.get("/string",(req,res)=> { 
    let str="<h1>Welcome to home page</h1>";
    res.send(str);
 })



app.get("/array",(req,res)=> { 
    let arr=["aaa","bbb","ccc"];
    res.send(arr);
})


app.get("/json",(req,res)=> { 
    let json={name:"Atul",Age: "23", email:"atul@gamil.com"};
    res.send(json);
 })

 
app.get("/buffer",(req,res)=> { 
    let buff=Buffer.from("Hello from buffer");
    res.send(buff);
 })
 
app.get("/file", function(req, res, next) {
    res.sendFile(path.join(__dirname + '/summer.html'));
});

app.get("/image", function(req, res, next) {
    res.sendFile(path.join(__dirname + '/image.jpg'));
});

app.get(/\/products\/([^\/]+)\/?$/, function(req, res, next) {
    res.send("Requested " + req.params[0]);
    });

 app.get("*",(req,res)=>{

    var erropage="invalid Url"
    res.status(404).send(erropage)
}
)
 app.listen(3000,()=> console.log("3000 port running"))
