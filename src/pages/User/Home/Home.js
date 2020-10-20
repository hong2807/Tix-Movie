import React from 'react'
import Banner from '../../../components/User/Banner/Banner'
import Footer from '../../../components/User/Footer/Footer'
import './Home.scss'

export default function Home() {
    return (
        <div className="home-component">
           <Banner></Banner>
           <Footer></Footer>
        </div>
    )
}
