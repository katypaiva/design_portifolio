import React from 'react';
import './index.css';

export default function Contact(props) {
    return (
        <div className="contact-container" id={props.id}>
            <p className="p-info contact-p">ENTRA LOGO <br className="wrap"/>EM CONTATO.</p>
            <p className="p-under-info contact-p">/ou não</p>
            <div className="form-contact">
                <input type="text" placeholder="SEU EMAIL"/>
                <button>
                    <svg className="contact-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.988 0H19.9881V1.58808L20.0001 1.6L19.9881 1.61192V2.26274H19.988V15.8392H17.7253V3.87476L1.60007 20L6.97512e-05 18.4L16.1373 2.26274L4.14895 2.26274V0H17.7253H18.4001H19.988Z" fill="white"/>
                    </svg>    
                </button> 
            </div>
        </div>
    )
}

