import React from 'react'
import './Home.scss'
import Banner from '../../../components/User/Banner/Banner'
import Cinema from '../../../components/User/Cinema/Cinema'
import Films from '../../../components/User/Films/Films'
import Footer from '../../../components/Share/Footer/Footer'
import MobileApp from '../../../components/User/MobieApp/MobileApp'
import Partner from '../../../components/User/Partner/Partner'

export default function Home() {
    return (
        <div className="home-component">
            <Banner></Banner>
            <Films></Films>
            <Cinema></Cinema>
            <MobileApp></MobileApp>
            <Partner></Partner>
        </div>
    )
}
