import React, { useRef, useEffect } from 'react';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(() => {
        toggleBtnRef.current.click()
    }, [])
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
            ref={toggleBtnRef}
            className={btnClass} 
            onClick={props.clicked}>
            Show/Hide
            </button>
        </div>
    )
};

export default Cockpit;