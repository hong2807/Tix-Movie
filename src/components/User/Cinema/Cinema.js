import React from 'react'
import { Tabs } from 'antd';

import './Cinema.scss'


export default function Cinema() {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }

    return (
        <div className="cinemaComponent pt-5">
            <div className="container">
                <div className="cinema__brand">
                    <ul>
                        <li><a><img src="./images/brand1.png"/></a></li>
                        <li><a><img src="./images/brand2.png"/></a></li>
                        <li><a><img src="./images/brand3.png"/></a></li>
                        <li><a><img src="./images/brand4.png"/></a></li>
                        <li><a><img src="./images/brand5.jpg"/></a></li>
                        <li><a><img src="./images/brand6.png"/></a></li>
                    </ul>
                </div>

                <div className="cinema__detail mt-5">
                    <div className="cinema__detailItem"> 
                        <div className="cinema__address">
                            <div className="cinema__addressItem">
                                <div className="inside">
                                    <div className="inside-img">
                                        <img src="./images/bhd-star-bitexco.jpg"></img>
                                            
                                    </div>
                                    <div className="inside-text">
                                        <h4 className="title">BHD Star Bitexco</h4>
                                            <p>Tang 3 &amp; 4, TTTM ICON 68, 2 Hai Trieu, Quan 1,TP.HCM</p>
                                    </div>
                                </div>
                                <div className="detail">
                                    <a>XEM CHI TIẾT</a>
                                </div>                   
                            </div>
                            <div className="cinema__addressItem">
                                <div className="inside">
                                    <div className="inside-img">
                                        <img src="./images/bhd-star-bitexco.jpg"></img>
                                            
                                    </div>
                                    <div className="inside-text">
                                        <h4 className="title">BHD Star Bitexco</h4>
                                            <p>Tang 3 &amp; 4, TTTM ICON 68, 2 Hai Trieu, Quan 1,TP.HCM</p>
                                    </div>  
                                </div>
                                <div className="detail">
                                    <a>XEM CHI TIẾT</a>
                                </div>                   
                            </div>
                            <div className="cinema__addressItem">
                                <div className="inside">
                                    <div className="inside-img">
                                        <img src="./images/bhd-star-bitexco.jpg"></img>
                                            
                                    </div>
                                    <div className="inside-text">
                                        <h4 className="title">BHD Star Bitexco</h4>
                                            <p>Tang 3 &amp; 4, TTTM ICON 68, 2 Hai Trieu, Quan 1,TP.HCM</p>
                                    </div>
                                </div>
                                <div className="detail">
                                    <a>XEM CHI TIẾT</a>
                                </div>                   
                            </div>
                        </div>
                        <div className="cinema__showtime">
                            <div className="cinema__showtimeItem">
                                <div className="inside">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="inside-img">
                                                <img src="./images/tiec-trang-mau-small.png"></img>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="inside-text">
                                                <div className="film-type">
                                                    <span className="film-version">2D DUB</span>
                                                    <span className="film-rating">C18</span>
                                                </div>
                                                <p>Tiệc Trăng Máu - Blood Moon Party</p>
                                                <p>100 phút</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cinema__timedetail">
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                </div>
                            </div> 
                            <div className="cinema__showtimeItem">
                                <div className="inside">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="inside-img">
                                                <img src="./images/tiec-trang-mau-small.png"></img>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="inside-text">
                                                <div className="film-type">
                                                    <span className="film-version">2D DUB</span>
                                                    <span className="film-rating">C18</span>
                                                </div>
                                                <p>Tiệc Trăng Máu - Blood Moon Party</p>
                                                <p>100 phút</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cinema__timedetail">
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="cinema__showtimeItem">
                                <div className="inside">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="inside-img">
                                                <img src="./images/tiec-trang-mau-small.png"></img>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="inside-text">
                                                <div className="film-type">
                                                    <span className="film-version">2D DUB</span>
                                                    <span className="film-rating">C18</span>
                                                </div>
                                                <p>Tiệc Trăng Máu - Blood Moon Party</p>
                                                <p>100 phút</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cinema__timedetail">
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                </div>
                            </div>   
                            <div className="cinema__showtimeItem">
                                <div className="inside">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="inside-img">
                                                <img src="./images/tiec-trang-mau-small.png"></img>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="inside-text">
                                                <div className="film-type">
                                                    <span className="film-version">2D DUB</span>
                                                    <span className="film-rating">C18</span>
                                                </div>
                                                <p>Tiệc Trăng Máu - Blood Moon Party</p>
                                                <p>100 phút</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cinema__timedetail">
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                </div>
                            </div>     
                            <div className="cinema__showtimeItem">
                                <div className="inside">
                                    <div className="row">
                                        <div className="col-2">
                                            <div className="inside-img">
                                                <img src="./images/tiec-trang-mau-small.png"></img>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="inside-text">
                                                <div className="film-type">
                                                    <span className="film-version">2D DUB</span>
                                                    <span className="film-rating">C18</span>
                                                </div>
                                                <p>Tiệc Trăng Máu - Blood Moon Party</p>
                                                <p>100 phút</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cinema__timedetail">
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                    <ul>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                        <li><a>13:55</a></li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



                                
                            