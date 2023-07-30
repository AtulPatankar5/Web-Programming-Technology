import React, {Component} from 'react'
import PersonDetail from './PersonDetail'

class Person1 extends Component{
    
    //ES7 feature
    constructor(){
        super()
        this.state={
            pname: "Shrilata",
            email: "shri@gamil.com",
            phone_number: 99999138372
        }
    
    }
    render(){
        // return  (<h2>Hello {this.state.pname}, {this.state.email}, {this.state.phone_number}</h2>)
        
        // return (<PersonDetail
        //         name={this.state.pname}
        //         email={this.state.email}
        //         phno={this.state.phone_number}/>);

        return (<h1>
            {this.state.pname}, 
            {this.state.email}, 
            {this.state.phone_number}</h1>);
    
    }
}

export default Person1