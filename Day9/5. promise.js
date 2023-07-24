let promise = new Promise((resolve, reject) => {
    //executor code     
    if(true)
        resolve("resolved!!")
    else
        reject("Not resolved");
});

promise.then(function (data){
    console.log(data)
}, function(err){
    console.log(err)
})

//-------------or---------------

promise.then( (data)=> console.log(data), (err)=>console.log(err))

//-------------or---------------

//promise.then(onresolve,onreject)
promise.then(result => console.log(result),error => console.log(error))