import React, {Component} from 'react'


// -----------Class Component--------------
// class PersonDetail extends Component{

//     render(){
//         return (<h1>{this.props.name} , {this.props.email} , {this.props.phno}  </h1>)
//     }

// }



//-----------Function Component----------------------
const PersonDetail=(props)=>{
        return (<h1>{props.name} , {props.email} , {props.phno}  </h1>)
}
export default PersonDetail