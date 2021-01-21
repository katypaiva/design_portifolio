import React from 'react'
import './index.css'

function H2 (props) {
    return (
        <div>
            <h2 className={props.className}>{props.name}</h2>
        </div>
        
    )
}

export default H2