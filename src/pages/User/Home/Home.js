import React from 'react'
import Banner from '../../../components/User/Banner/Banner'
import Cinema from '../../../components/User/Cinema/Cinema'
import Films from '../../../components/User/Films/Films'
import Footer from '../../../components/User/Footer/Footer'
import './Home.scss'

export default function Home() {
    return (
        <div className="home-component">
           <Banner></Banner>
           <Films></Films>
           <Cinema></Cinema>
           <Footer></Footer>
        </div>
    )
}
