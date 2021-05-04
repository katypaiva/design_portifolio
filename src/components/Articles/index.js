import React from 'react';
import H2 from '../H2/index'
import './index.css';

export default function Articles(props) {

    const arrAticles = [
        {
            id: 1,
            title: "Se a vida te der limões não faça uma limonada", 
            link: "https://brasil.uxdesign.cc/se-a-vida-te-der-limões-não-faça-uma-limonada-f0345844b38",
            year: "2020"
        }, 
        {
            id:2,
            title: "Como é ser designer preto", 
            link: "https://brasil.uxdesign.cc/como-é-ser-designer-preto-c2bf286a8eae",
            year: "2019"
        },
        {
            id:3,
            title: "Seu produto é honesto com o usuário?", 
            link: "https://www.design2020.com.br/artigos/seu-produto-e-honesto-com-o-usuario",
            year: "2019"
        },
        {
            id:4,
            title: "Designers precisam aprender design", 
            link: "https://brasil.uxdesign.cc/designers-precisam-aprender-design-6b57340e0de0",
            year: "2019"
        },
        {
            id:5,
            title: "Meu primeiro ano como designer de interfaces", 
            link: "https://brasil.uxdesign.cc/a-cultura-de-menosprezo-ao-ui-designer-5ffc5f35e41",
            year: "2018"
        },
    ]

    return (
        <div className="div-article" id={props.id}>
            <H2 name={"Artigos"} />
            <div className="display">
                <div>
                    <p className="text-bio font-article">Gosto de escrever por ser a maneira mais democrática de expor minha visão sobre aspectos diferentes do mercado e sobre Design como disciplina. Escrevo sobre o que vivo.</p>
                    {arrAticles.map((item, index) => {
                        return(
                            <div className="display data-div" key={index}>
                                <a className="link font-article font-weight" key={index} href={item.link} target="_blank">{item.title}</a>
                                <p className="mobile-disable font-article" key={index}>{item.year}</p>
                            </div>
                        )
                    })}
                </div>
                <a href="https://medium.com/@iamflaviopires" target="_blank">
                    <button className="medium-btn font-weight font-article">Ver perfil no medium</button>
                </a>
            </div>
        </div>
    )
    
}