import React from 'react';
import Information from '../../components/Information/index';
import Navbar from '../../components/Navbar/index';
import Articles from '../../components/Articles/index';
import Projects from '../../components/Projects/index';
import Contact from '../../components/Contact/index';
import './index.css';

function Main () {
    return (
        <div className="main">
            <Navbar  aboutHref={"#about"} articleHref={"#article"} projectHref={"#project"} contactHref={"#contact"}/>
            <h1 class="title">Flávio Pires</h1>
            <div className="div-mobile">
                <img class="img-mobile" src={require('../../img/spolith.svg')} />
            </div>
            <div className="div-desktop-m">
                <img class="img-desktop-m" src={require('../../img/img-desktopM.svg')} />
            </div>
            <div className="div-desktop-l">
                <img class="img-desktop-l" src={require('../../img/img-l.svg')} />
            </div>
            <Information id={"about"} />
            <Articles id={"article"} />
            <Projects id={"project"} />
            <Contact id={"contact"}/>
        </div>
    )
}

export default Main