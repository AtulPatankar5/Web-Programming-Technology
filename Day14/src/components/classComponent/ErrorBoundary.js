import React, { Component } from 'react';

class ErrorBoundary extends Component {
    
    state={
        hasErrors: false,
        errorMsg: ""
    }

    componentDidCatch(error){
        this.setState({hasErrors: true, errorMsg:error})
    }

    render(){
        if(this.state.hasErrors)
            return (<h1>Something went wrong</h1>)
        else
            return this.props.children 
    }
}
export default ErrorBoundary