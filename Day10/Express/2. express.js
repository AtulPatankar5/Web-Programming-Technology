let express=require("express")

let app=express();

app.get("/",(req,res)=> { 
    let str="<h1>Welcome to home page</h1>";
    let d1=new Date();
    str+="Today is "+d1.toString();

    res.send(str);
 })

 app.get("*",(req,res)=>{

    var erropage="invalid Url"
    res.status(404).send(erropage)
}
)
 app.listen(3000,()=> console.log("3000 port running"))
