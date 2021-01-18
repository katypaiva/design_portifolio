import React from 'react'
import './index.css'

export default function Navbar() {
    return (
        <div class="container">
            <p class="p-name">Flávio Pires</p>
            <input type="checkbox" id="check" />
            <label for="check" >
                <div class="menu-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="change-svg" opacity="0.5" width="24" height="24" rx="12" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="1.70068" y="13.7953" width="10.2992" height="10.2047" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="12" y="13.7953" width="10.2992" height="10.2047" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="12" y="3.59052" width="10.2992" height="10.2047" fill="#28282A"/>
                        <rect className="change-svg" opacity="0.5" x="1.70068" y="3.59052" width="10.2992" height="10.2047" fill="#28282A"/>
                    </svg>
                </div>
            </label>
            <p class="p-location">location </p>
            <ul>
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

{/* <input type="checkbox" className="check" style={{display: none;}}/>
 */}