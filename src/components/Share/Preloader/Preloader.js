import React from 'react'
import './Preloader.scss'


export default function Preloader() {
    const [isShow, setIsShow] = React.useState(true);

    const hidePreloader = () => {
        setTimeout(() => {
            setIsShow(false);
        }, 2000);
    }

    window.onload = hidePreloader;

    return (
        isShow && (<div className="predloader-component">
            <div className="preloader-wrapper">
                <h1 class="title">Wellcome To Tix !</h1>
                <div class="rainbow-marker-loader">TIX</div>
            </div>
        </div>)
    )
}
