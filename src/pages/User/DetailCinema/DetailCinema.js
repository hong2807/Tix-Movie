import React from 'react'
import './DetailCinema.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faPlayCircle, faTicketAlt } from "@fortawesome/free-solid-svg-icons";


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
                            <div className="detailCinema__infoCenter">
                                <div>
                                <h3 className="film-name">BHD Star Bitexco</h3>
                                <p>
                                L3-Bitexco Icon 68, 2 Hải Triều, Quận 1.
                                </p>
                               
                                <div className="group-btn mt-3 mb-3">
                                    <a href="./" className="btn">
                                    <FontAwesomeIcon className="icon" icon={faTicketAlt} />
                                    Mua vé
                                    </a>
                                </div>

                                </div>

                                {/* <div class="ticket mr-3">BHD Quan 3</div>
                                <div class="ticket">BHD Quan 7</div> */}
                                <div className="mt-5 group-btn">
                                <button className="btn mr-3 mb-3">
                                    <FontAwesomeIcon className="icon" icon={faLandmark} />
                                    BHD Star Vincom Thảo Điền
                                </button>
                                <button className="btn mr-3 mb-3">BHD Star Vincom 3/2</button>
                                <button className="btn mr-3 mb-3">BHD Star Phạm Hùng</button>
                                <button className="btn mr-3 mb-3">BHD Star Vincom Quang Trung</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailCinema__showtimes">
                    <div className="detailFilm__day">
                        <h3 className='detailFilm__day__title'><span>02. </span>Chọn Ngày</h3>
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
                        <h3 className='detailFilm__day__title'><span>03. </span>Chọn Suất Chiếu</h3>
                        <div className="detailFilm__timeItem">
                            <div className="row">
                                <div className="col-5">
                                    <div className="detailFilm__left">
                                        <div className="detailFilm__leftItem">
                                            <div className="inside">
                                                <div className="inside-text">
                                                    <h4 className="title">BHD Star Bitexco</h4>
                                                    <p>Tang 3 &amp; 4, TTTM ICON 68, 2 Hai Trieu, Quan 1,TP.HCM</p>
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
                                                <div className="inside-text">
                                                    <h4 className="title">BHD Star Bitexco</h4>
                                                    <p>Tang 3 &amp; 4, TTTM ICON 68, 2 Hai Trieu, Quan 1,TP.HCM</p>
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
                                                <div className="inside-text">
                                                    <h4 className="title">BHD Star Bitexco</h4>
                                                    <p>Tang 3 &amp; 4, TTTM ICON 68, 2 Hai Trieu, Quan 1,TP.HCM</p>
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
