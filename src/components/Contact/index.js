import React from 'react';
import './index.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <p className="p-info contact-p">ENTRA LOGO <br className="wrap"/>EM CONTATO.</p>
            <p className="p-under-info contact-p">/ou não</p>
            <div className="form-contact">
                <input type="text" placeholder="SEU EMAIL"/>
                <button><img src={require('../../img/sendBtn.svg')} /></button>
            </div>
        </div>
    )
}