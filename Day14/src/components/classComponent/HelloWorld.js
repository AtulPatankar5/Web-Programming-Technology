import React, { Component } from 'react';

class HelloWorld extends Component {
    //Lifecycle components
    componentWillMount() {
        console.log('Component is going to mount');
    }

    render() {
        console.log("Component is rendering")
        // return (<h2>Hello {this.props.username}</h2>)
        return (<h2> HELLO </h2>)
    }

    componentDidMount() {
        console.log('Component is Mounted in DOM');
    }

}
export default HelloWorld;