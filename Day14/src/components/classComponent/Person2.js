import React, {Component} from 'react'


class Person2 extends Component{
  
        state={
            pname: "Shrilata",
        }

        btnHandler=()=>{
            this.setState({pname:"Atul"})
        }
        render(){
            return (<div>
                <h1>{this.state.pname}</h1>;
                <button onClick={this.btnHandler}>Change Name</button>
            </div>)
        }
    }
    
    export default Person2
    
