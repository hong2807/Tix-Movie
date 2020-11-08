import React from 'react'
import Banner from '../../../components/User/Banner/Banner'
import Cinema from '../../../components/User/Cinema/Cinema'
import Films from '../../../components/User/Films/Films'
import Footer from '../../../components/Share/Footer/Footer'
import MobileApp from '../../../components/User/MobieApplication/MobileApp'
import './Home.scss'

export default function Home() {
    return (
        <div className="home-component">
            <Banner></Banner>
            <Films></Films>
            <Cinema></Cinema>
            <MobileApp></MobileApp>
            <Footer></Footer>
        </div>
    )
}
