let express=require("express")

let app=express()

app.get("/",function(req,res){
    res.send("<h1>Welcome to HOME PAGE</h1>")
})

app.get("/admin",function(req,res){
    res.send("<h1>Welcome to ADMIN PAGE</h1>")
})

app.get("/Manager",function(req,res){
    res.send("<h1>Welcome to Manager PAGE</h1>")
})
app.listen(3000,()=>console.log("App is listening on http://localhost:3000"))