import React from 'react'
import Menu from '../Menu/index'
import './index.css'

export default function Navbar(props) {
    return (
        <div className="container">
            <p className="p-name font">FlÁVIO PIRES</p>

                <Menu />

            <div className="mobile-disable links">
                <a className="about-href font" href={props.aboutHref}>Sobre, </a>
                <a className="article-href font" href={props.articleHref}>Artigos, </a>
                <a className="project-href font" href={props.projectHref}>Projetos, </a>
                <a className="contact-href font" href={props.contactHref}>Contato</a>
            </div>
            <p className="mobile-disable font location">São Paulo, SP - Brasil</p>
        </div>

    )
}