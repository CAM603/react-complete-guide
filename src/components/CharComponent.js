import React from 'react';

const CharComponent = (props) => {
    let styles = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return (
        <div style={styles} onClick={props.clicked}>
            {props.letter}
        </div>
    )
}

export default CharComponent;