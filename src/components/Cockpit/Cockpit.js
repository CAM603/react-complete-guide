import React from 'react';

import classes from './Cockpit.css';

const Cockpit = (props) => {
    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red
    }
    
    if (props.persons.length <= 2) {
        classes.push(classes.red)
    }
    if (props.persons.length <= 1) {
        classes.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1 className={classes.join(' ')}>Welcome</h1>
            <button 
            className={btnClass} 
            onClick={props.clicked}>
            Show/Hide
            </button>
        </div>
    )
};

export default Cockpit;