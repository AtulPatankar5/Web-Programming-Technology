import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.passwordEl = React.createRef();
        this.rememberMeEl = React.createRef();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: this.nameEl.current.value,
            password: this.passwordEl.current.value,
            rememberMe: this.rememberMeEl.current.checked,
        }
        console.log(data)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset><legend>Login Form</legend>
                    <input type="text" placeholder="username" ref={this.nameEl} /><br></br>
                    <input type="password" placeholder="password" ref={this.passwordEl} /><br></br>
                    <label><input type="checkbox" ref={this.rememberMeEl} />Remember me
                    </label><br></br>
                    <button type="submit" className="myButton">Login</button>
                </fieldset>
            </form>
        );
    }
}
export default LoginForm