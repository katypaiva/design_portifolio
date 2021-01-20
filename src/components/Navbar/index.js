import React from 'react'
import Menu from '../Menu/index'
import './index.css'

export default function Navbar(props) {
    return (
        <div class="container">
            <p class="p-name font">Flávio Pires</p>
            <Menu />
            <div className="mobile-disable links">
                <a className="about-href font" href={props.aboutHref}>Sobre, </a>
                <a className="article-href font" href={props.articleHref}>Artigos, </a>
                <a className="project-href font" href={props.projectHref}>Projetos, </a>
                <a className="contact-href font" href={props.contactHref}>Contato</a>
            </div>
            <p class="mobile-disable font location">São Paulo, SP - Brasil</p>
        </div>

    )
}