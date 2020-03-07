import React from 'react';
import './index.css'

function Button (props){
    return (
        <button className="contact-btn" onClick={props.onClick}>{props.title}</button>
    )
}

export default Button