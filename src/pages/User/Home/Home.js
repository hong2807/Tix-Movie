import React, { useEffect } from 'react'
import './Home.scss'
import Banner from '../../../components/User/Banner/Banner'
import Cinema from '../../../components/User/Cinema/Cinema'
import Films from '../../../components/User/Films/Films'
import MobileApp from '../../../components/User/MobieApp/MobileApp'
import Partner from '../../../components/User/Partner/Partner';
import { setPreloader } from "../../../redux/actions/PreloaderAction";
import { useDispatch } from "react-redux";
import { TIME_SHOW_PRELOADER } from "../../../redux/constants/PreloaderConstant";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPreloader(true));
        setTimeout(() => dispatch(setPreloader(false)), TIME_SHOW_PRELOADER);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
