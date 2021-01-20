import React from 'react';
import H2 from '../H2/index'
import './index.css';

export default function Articles(props) {
    return (
        <div className="div-article" id={props.id}>
            <H2 name={"Artigos"} />
            <p className="text-bio">Gosto de escrever por ser a maneira mais democrática de expor minha visão sobre aspectos diferentes do mercado e sobre Design como disciplina. Escrevo sobre o que vivo.</p>
            <p className="links"><a href="https://brasil.uxdesign.cc/se-a-vida-te-der-limões-não-faça-uma-limonada-f0345844b38" target="_blank">Se a vida te der limões não faça uma limonada</a></p>
            <p className="links"><a href="https://brasil.uxdesign.cc/como-é-ser-designer-preto-c2bf286a8eae" target="_blank">Como é ser designer preto</a></p>
            <p className="links"><a href="https://www.design2020.com.br/artigos/seu-produto-e-honesto-com-o-usuario" target="_blank">Seu produto é honesto com o usuário?</a></p>
            <p className="links"><a href="https://brasil.uxdesign.cc/designers-precisam-aprender-design-6b57340e0de0" target="_blank">Designers precisam aprender design</a></p>
            <p className="links"><a href="https://brasil.uxdesign.cc/a-cultura-de-menosprezo-ao-ui-designer-5ffc5f35e41" target="_blank">Meu primeiro ano como designer de interfaces</a></p>
            <form action="https://medium.com/@iamflaviopires">
                <input className="medium-btn" type="submit" value="Ver perfil no medium" />
            </form>
        </div>
    )
    
}