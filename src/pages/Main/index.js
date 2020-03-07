import React from 'react';
import Button from '../../components/Button/index'
import menu from '../../img/menu.svg'
import Intro from '../../components/Intro/index'
import H1 from '../../components/H1/index'
import Card from '../../components/Card/index'
import Network from '../../components/Network/index'
import './index.css'

function Main () {
    return (
        <div className="main">
            <section className="contactsection">
                <Button title={"Flávio Pires"} />
                <img src={menu}></img>
            </section>
            <Intro></Intro>
            <H1 title={"Last projects and articles"} />
            <Card title={"If life gives you lemons don't make lemonade"} date={"Medium 2020"} quote={"How thinking guided by creative solutions takes you away from better understanding the problem..."}/>
            <Card title={"What is it like to be a black designer"} date={"Medium 2019"} quote={"The veiled racism of everyday life."}/>
            <Card title={"Cinema Ticket App"} date={"Dribbble 2019"} quote={"A cinema ticket app concept. For real."}/>















            
            <Network></Network>
        </div>
    )
}

export default Main