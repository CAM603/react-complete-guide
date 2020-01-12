import React from 'react';

const ValidationComponent = (props) => {
    let validationMessage;

    props.inputLength < 5 ? validationMessage = 'Text too short' : validationMessage = 'Text is long enough';
    
    return (
        <div>
            {validationMessage}
        </div>
    )
}

export default ValidationComponent;