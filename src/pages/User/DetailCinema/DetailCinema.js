import React from 'react'
import './DetailCinema.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faTicketAlt } from "@fortawesome/free-solid-svg-icons";


export default function DetailCinema() {
    return (
        <div className="detailCinema-component component-padding">
            <div className="container">
                <div className="detailCinema__info">
                    <div className="row">
                        <div className="col-3">
                            <div className="detailCinema__infoLeft">
                                <img className="w-100" src="/images/bhd-star-bitexco-rap.jpg" alt="rap"></img>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="detailCinema__infoRight">
                                <div className="detailCinema__address">
                                    <h3 className="film-name">BHD Star Bitexco</h3>
                                    <p>
                                        L3-Bitexco Icon 68, 2 Hải Triều, Quận 1.
                                    </p>
                               
                                    <div className="detailCinema__btn">
                                        <a href="./" className="btn">
                                        <FontAwesomeIcon className="icon" icon={faTicketAlt} />
                                        Mua vé
                                        </a>
                                    </div>
                                </div>
                               
                                <div className="detailCinema__branch">
                                    <button className="btn">
                                        <FontAwesomeIcon className="icon" icon={faLandmark} />
                                        BHD Star Vincom Thảo Điền
                                    </button>
                                    <button className="btn">
                                        <FontAwesomeIcon className="icon" icon={faLandmark} />
                                        BHD Star Vincom 3/2
                                    </button>
                                    <button className="btn">
                                        <FontAwesomeIcon className="icon" icon={faLandmark} />
                                        BHD Star Phạm Hùng
                                    </button>
                                    <button className="btn">
                                        <FontAwesomeIcon className="icon" icon={faLandmark} />
                                        BHD Star Vincom Quang Trung
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailCinema__showtimes">
                    <div className="detailFilm__day">
                        <h3 className='detailFilm__day__title'><span>01. </span>Chọn Ngày</h3>
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
                        <h3 className='detailFilm__day__title'><span>02. </span>Chọn Phim & Suất Chiếu</h3>
                        <div className="detailFilm__timeItem">
                            <div className="row">
                                <div className="col-5">
                                    <div className="detailFilm__left">
                                        <div className="detailFilm__leftItem">
                                            <div className="inside">
                                                <div className="row">
                                                    <div className="col-2">
                                                        <div className="inside-img">
                                                            <img src="./images/tiec-trang-mau-small.png" alt=""></img>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="detailFilm__right">
                                        <div className="detailFilm__rightItem">
                                            <div className="cinema__timedetail">
                                                    <ul>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                        <li><a href="./">13:55</a></li>
                                                    </ul>
                                                </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="detailFilm__timeItem">
                            <div className="row">
                                <div className="col-5">
                                    <div className="detailFilm__left">
                                        <div className="detailFilm__leftItem">
                                            <div className="inside">
                                            <div className="row">
                                                    <div className="col-2">
                                                        <div className="inside-img">
                                                            <img src="./images/tiec-trang-mau-small.png" alt=""></img>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="detailFilm__right">
                                        <div className="detailFilm__rightItem">
                                            <div className="cinema__timedetail">
                                                <ul>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                </ul>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>  
                        </div>

                        <div className="detailFilm__timeItem">
                            <div className="row">
                                <div className="col-5">
                                    <div className="detailFilm__left">
                                        <div className="detailFilm__leftItem">
                                            <div className="inside">
                                            <div className="row">
                                                    <div className="col-2">
                                                        <div className="inside-img">
                                                            <img src="./images/tiec-trang-mau-small.png" alt=""></img>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="detailFilm__right">
                                        <div className="detailFilm__rightItem">
                                            <div className="cinema__timedetail">
                                                <ul>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                    <li><a href="./">13:55</a></li>
                                                </ul>
                                            </div>
                                        </div> 
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
