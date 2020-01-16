import React, { Component } from 'react';
import Radium from 'radium';

import './Person.css';
import Aux from '../../../HOC/Aux';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        this.inputElementRef.current.focus();
    }
    
    render(){
        return (
            <Aux>
                <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input 
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}
                ref={this.inputElementRef}
                />
            </Aux>
        )
    }
}

export default Radium(Person);