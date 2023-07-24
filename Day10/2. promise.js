const { resolve } = require("path");

var promise= new Promise((resolve,reject)=>{

    if(true)
    resolve("resolved")
    else
    reject("rejected")
})
    
promise.then((data)=>console.log(data)).catch((err)=> console.log(err))

console.log("Hello world")