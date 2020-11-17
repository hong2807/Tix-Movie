import React from 'react'
import './DetailFilm.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faTicketAlt } from "@fortawesome/free-solid-svg-icons";


export default function DetailFilm() {
    return (
        <div className="detailFilm-component pt-5">
            <div className="container">
                <div className="detailFilm__info">
                    <div className="row">
                        <div className="col-3">
                            <div className="detailFilm__infoLeft">
                                <img className="w-100" src="/images/tiec-trang-mau-blood-moon-party.png" alt=""></img>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="detailFilm__infoCenter">
                                <h3 className="film-name">Tiệc trăng máu</h3>
                                <p>
                                Trong buổi họp mặt của nhóm bạn thân, một thành viên bất ngờ đề xuất trò chơi chia sẻ điện thoại nhằm tăng tinh thần “đoàn kết”. Từ đó, những góc khuất của từng người dần hé lộ và khiến cho mối quan hệ vốn khắng khít của họ bắt đầu lay chuyển.
                                </p>
                                <ul>
                                    <li>    
                                        <label>Khởi chiếu:</label>
                                        <span>23.10.2020</span>
                                    </li>
                                    <li>
                                        <label>Thời lượng:</label>
                                        <span>100 phút</span>
                                    </li>
                                </ul>
                                <div className="group-btn mt-3">
                                    <a href="./" className="btn mr-3">
                                    <FontAwesomeIcon className="icon" icon={faPlayCircle} />
                                    Trailer
                                </a>
                                    <a href="./" className="btn">
                                    <FontAwesomeIcon className="icon" icon={faTicketAlt} />
                                    Mua vé
                                </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="detailFilm__infoRight">
                                <div className="borderRating">
                                    <span>7.8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailFilm__showtimes">
                    <h3 className='detailFilm__day__title'><span>01. </span>Chọn Rạp</h3>
                    <div className="detailFilm__brand">
                        <ul>
                            <li className="active">
                                <img src="./images/brand1.png" alt=""/>
                                <br></br>
                                BHD Star Cineplex
                            </li>
                            <li>
                                <img src="./images/brand2.png" alt=""/>
                                <br></br>
                                Cinestar
                            </li>
                            <li>
                                <img src="./images/brand3.png" alt=""/>
                                <br></br>
                                DDC - Đống Đa
                            </li>
                            <li>
                                <img src="./images/brand4.png" alt=""/>
                                <br></br>
                                Mega GS
                            </li>
                            <li>
                                <img src="./images/brand5.jpg" alt=""/>
                                <br></br>
                                DCINE Cinemas
                            </li>
                            <li>
                                <img src="./images/brand6.png" alt=""/>
                                <br></br>
                                Lotte Cinema
                            </li>
                        </ul>
                    </div>

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
