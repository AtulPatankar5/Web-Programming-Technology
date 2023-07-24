var express=require("express")

var path=require("path")

var app=express()

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/form.html'));
})

app.get("/submit",function (req,res){
    console.log(req.query.name)
    console.log(req.query.lastname)
    res.send(req.query.name+" "+req.query.lastname)
    
})

app.listen(3000);