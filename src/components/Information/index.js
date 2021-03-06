import React from 'react';
import './index.css'

export default function Information(props) {
    return (
        <div className="div-text" id={props.id}>
            <article className="info-text font-infor font-size width-text">
                Trabalhando com design desde 2016, sempre priorizei a boa experiência de quem visualiza e usurfrui do produto/serviço que era desenvolvido. Meu objetivo é estar constantemente trabalhando em iniciativas com alto nível de impacto que agreguem valor ao negócio e ao usuário simultaneamente.
            </article> 
            <p className="font-infor font-size width-text">Designer, Autor no <a className="font-infor" href="https://uxdesign.cc" target="_blank">uxcollective</a>, Moderador na <a className="font-infor" href="https://www.linkedin.com/company/designinmeets" target="_blank">Design.in</a></p>
        </div>
    )
}