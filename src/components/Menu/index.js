import React from 'react'
import './index.css'

export default function Menu(){
    return(
        <div className="tablet-disable">
            <input type="checkbox" className="tablet-disable" id="check" />
            <label className= "tablet-disable" for="check" >
                <div className="menu-button tablet-disable">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="change-svg" opacity="0.5" width="24" height="24" rx="12" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="1.70068" y="13.7953" width="10.2992" height="10.2047" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="12" y="13.7953" width="10.2992" height="10.2047" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="12" y="3.59052" width="10.2992" height="10.2047" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="1.70068" y="3.59052" width="10.2992" height="10.2047" fill="#28282A"/>
                    </svg>
                </div>
            </label>
            <ul className="tablet-disable">
                <p className="name-small">Flávio Pires</p>
                <p className="name-big">Flávio Pires</p>
                <li><a className="about-href">Sobre</a></li>
                <li><a className="article-href">Artigos</a></li>
                <li><a className="project-href">Projetos</a></li>
                <li><a className="contact-href">Contato</a></li>
            </ul>
        </div>
    )
}

