exports.str="Hello from file 1"

exports.greet=()=>{
    console.log("HII from greet")
}

var greetuser=()=>{
    console.log("Good mormning")
}
exports.greetuser=greetuser;// seprate assign export keyword  