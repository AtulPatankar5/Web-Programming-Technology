import React, { Component } from 'react';

class ControlledLoginForm extends Component {
    state = {
        username: '',
        email: ''
    };

    //Controlled Input  
    handleInput = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({ [name]: val });
        console.log(this.state)
    }
    handleSubmit = (event) => {
        alert("A name was submitted: "+ this.state.username);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className='container'>
                <h3>Hello {this.state.username} {this.state.email}</h3>
                Name : <input name="username" onChange={this.handleInput} /><br />
                Email : <input name="email" onChange={this.handleInput} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ControlledLoginForm