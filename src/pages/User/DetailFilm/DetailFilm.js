import React from 'react'
import './DetailFilm.scss'


export default function DetailFilm() {
    return (
        <div className="detailFilm-component pt-5">
            <div className="container">
                <div className="detailFilm__info"></div>

                <div className="detailFilm__showtimes">
                    <div className="detailFilm__day">
                        <ul>
                            <li className="active">
                                <p className="mb-0">
                                    <span>Thứ 2</span>
                                    <br></br>
                                    10
                                </p>

                            </li>
                            <li>
                                <p>
                                    <span>Thứ 3</span>
                                    <br></br>
                                    11
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Thứ 4</span>
                                    <br></br>
                                    12
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Thứ 5</span>
                                    <br></br>
                                    13
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Thứ 6</span>
                                    <br></br>
                                    14
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Thứ 7</span>
                                    <br></br>
                                    15
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Chủ nhật</span>
                                    <br></br>
                                    16
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="detailFilm__time">
                        <div className="detailFilm__timeContent "> 
                                <div className="detailFilm__timeLeft">
                                    <div className="detailFilm__timeItem">
                                        <div className="inside">
                                            <div className="inside-img">
                                                <img src="./images/brand1.png"/>       
                                            </div>
                                            <div className="inside-text">
                                                <p className="title">BHD Star Cineplex</p>
                                            </div>
                                        </div>                  
                                    </div>
                                    <div className="detailFilm__timeItem">
                                        <div className="inside">
                                            <div className="inside-img">
                                                <img src="./images/brand2.png"/>       
                                            </div>
                                            <div className="inside-text">
                                                <p className="title">BHD Star Cineplex</p>
                                            </div>
                                        </div>                  
                                    </div>
                                    <div className="detailFilm__timeItem">
                                        <div className="inside">
                                            <div className="inside-img">
                                                <img src="./images/brand3.png"/>       
                                            </div>
                                            <div className="inside-text">
                                                <p className="title">BHD Star Cineplex</p>
                                            </div>
                                        </div>                  
                                    </div>
                                </div>

                                <div className="detailFilm__timeRight">
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
        </div>
    )
}
