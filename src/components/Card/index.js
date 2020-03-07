import React from 'react';
import './index.css';

function Card (props) {
    return (
        <section className="card">
            <img className="img" src={props.img}/>
            <h2 className="title font">{props.title}</h2>
            <p className="font">{props.date}</p>
            <div className="font">{props.quote}</div>
            <a className="font" href={props.href}>SEE MORE</a>
        </section>
    )
} 

export default Card