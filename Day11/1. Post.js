var express=require("express")
var app=express();
var bodyParser=require("body-parser")
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.sendFile("./PostForm.html",{root: __dirname});
})

app.post("/submit-data",(req,res)=>{
    var name=req.body.fn+" "+req.body.ln;
    res.send("Hello "+ name+" Welcome to APP!!!!")
})

app.listen(3000,()=>console.log("Port running at 3000"))