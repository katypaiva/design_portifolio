import React from 'react';
import Intro from '../../components/Intro/index';
import Card from '../../components/Card/index';
import Information from '../../components/Information/index';
import Navbar from '../../components/Navbar/index';
import Articles from '../../components/Articles/index';
import './index.css';

function Main () {
    return (
        <div className="main">
            <Navbar  />
            <h1 class="title">Flávio Pires</h1>
            <div className="div-mobile">
                <img class="img-mobile" src={require('../../img/spolith.svg')} />
            </div>
            <Information />
            <Articles />
        </div>
    )
}

export default Main