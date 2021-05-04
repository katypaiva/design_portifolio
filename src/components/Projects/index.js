import React from 'react';
import H2 from '../H2/index'
import './index.css';

export default function Projects(props) {

    const arr = [
                    {
                        name: "Conversion Hacks", 
                        type: "Product Design",
                        company: "Viva Real",
                        year: "2020"
                    }, 
                    {
                        name: "Pontos de Interesse", 
                        type: "Product Design",
                        company: "Viva Real",
                        year: "2020"
                    },
                    {
                        name: "Concept", 
                        type: "UI Design",
                        company: "10x",
                        year: "2019"
                    },
                    {
                        name: "Redesign", 
                        type: "UI Design",
                        company: "ProEnem",
                        year: "2018"
                    },
                ]
    
    return (
        <div className="project-container" id={props.id}>
                <H2 name={"Projetos"} />
                        {arr.map(item => { 
                            return (
                                <div className="div-list">
                                    <div className="display-project mobile-desable">
                                        <p className="type-list project-font">{item.type}</p>
                                    </div>
                                    <div className="display-project mobile-desable">
                                        <p className="company-list project-font">{item.company}</p>
                                    </div>
                                    <div className="display-project ">
                                        <p className="name-list project-font">{item.name}</p>
                                    </div>
                                    <div className="display-project ">
                                        <p className="year-list project-font">{item.year}</p>
                                    </div>
                                </div>
                            ) 
                        })}
        </div>
    )
}
