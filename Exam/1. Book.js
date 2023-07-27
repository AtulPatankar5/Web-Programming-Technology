var express=require("express")
var app=express();
var bodyParser=require("body-parser")
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.sendFile("./BookForm.html",{root: __dirname});
})

app.post("/submit-data",(req,res)=>{
    const bid = Math.floor(Math.random() * 1000000);
    // var bid=req.body.bookid ;
    var bname=req.body.bookname; 
    var bauthor=req.body.author;
    var bprice=req.body.price;
    // Generate an Id for the book.
  
    res.send("<table border='2px' cellspacing='0px'><tr><td>BookID</td><td>Book name</td><td>Author</td><td>Book Price</td></tr> <tr><td>"+ bid+"</td><td>"+ bname+"</td><td>"+ bauthor+"</td><td>"+ bprice+"</td>"+"</tr> </table>");
})

app.listen(3000,()=>console.log("Port running at 3000"))

