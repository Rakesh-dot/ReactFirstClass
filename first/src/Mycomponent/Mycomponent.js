import React, { Component } from 'react';

class Mycomponent extends Component{

    render(){
        return <p>your name is {this.props.firstname}. Your age is {this.props.age}</p>
    }

}

export default Mycomponent