import React from 'react';

const checkBox = (props) => {
   
    if (props.value) {
            return (<div><input type="checkbox" onClick={props.clicked} checked/>{props.text}</div>)
    } else return (<div><input type="checkbox" onClick={props.clicked}/>{props.text}</div>)
     

}

export default checkBox;