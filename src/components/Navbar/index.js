import React from 'react'
import './index.css'

export default function Navbar() {
    return (
        <div class="container">
            <p class="p-name">Flávio Pires</p>
            <div class="links-container">
                <a>Sobre</a>
                <a>Artigos</a>
                <a>Projetos</a>
                <a>Contato</a>
            </div>
            <p class="p-location">location </p>
            <button class="menu-button"><img class="mg-btn" src={require('../../img/menu.svg')} /></button>
        </div>
    )
}