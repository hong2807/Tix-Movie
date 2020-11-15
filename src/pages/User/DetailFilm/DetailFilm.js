import React from 'react'
import './DetailFilm.scss'


export default function DetailFilm() {
    return (
        <div className="detailFilm-component pt-5">
            <div className="container">
                <div className="detailFilm__info">
                    <div className="row">
                        <div className="col-4">
                            <div className="detailFilm__infoLeft">
                                <img className="w-100" src="/images/tiec-trang-mau-blood-moon-party.png"></img>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="detailFilm__infoRight">
                                <h3 style={{color: "white", textTransform: "uppercase"}}>Tiệc trăng máu</h3>
                                <p>
                                Trong buổi họp mặt của nhóm bạn thân, một thành viên bất ngờ đề xuất trò chơi chia sẻ điện thoại nhằm tăng tinh thần “đoàn kết”. Từ đó, những góc khuất của từng người dần hé lộ và khiến cho mối quan hệ vốn khắng khít của họ bắt đầu lay chuyển.
                                </p>
                                <ul>
                                    <li>Khởi chiếu
                                        <span>23.10.2020</span>
                                    </li>
                                    <li>Thời lượng
                                        <span>100 phút</span>
                                    </li>
                                </ul>
                                <div className="group-btn mt-3">
                                    <a href="#" className="btn btn-success mr-3">Trailer</a>
                                    <a href="#" className="btn btn-success">Mua vé</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailFilm__showtimes">
                    <div className="detailFilm__brand">
                        <ul>
                            <li className="active">
                                <img src="./images/brand1.png"/>
                                <br></br>
                                BHD Star Cineplex
                            </li>
                            <li>
                                <img src="./images/brand2.png"/>
                                <br></br>
                                Cinestar
                            </li>
                            <li>
                                <img src="./images/brand3.png"/>
                                <br></br>
                                DDC - Đống Đa
                            </li>
                            <li>
                                <img src="./images/brand4.png"/>
                                <br></br>
                                Mega GS
                            </li>
                            <li>
                                <img src="./images/brand5.jpg"/>
                                <br></br>
                                DCINE Cinemas
                            </li>
                            <li>
                                <img src="./images/brand6.png"/>
                                <br></br>
                                Lotte Cinema
                            </li>
                        </ul>
                    </div>

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
                        <div className="detailFilm__timeItem">
                            <div className="row">
                                <div className="col-4">
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
                                <div className="col-8">
                                    <div className="detailFilm__right">
                                        <div className="detailFilm__rightItem">
                                            <div className="cinema__timedetail">
                                                    <ul>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
                                                        <li><a>13:55</a></li>
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

                        <div className="detailFilm__timeItem">
                            <div className="row">
                                <div className="col-4">
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
                                <div className="col-8">
                                    <div className="detailFilm__right">
                                        <div className="detailFilm__rightItem">
                                            <div className="cinema__timedetail">
                                                <ul>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
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

                        <div className="detailFilm__timeItem">
                            <div className="row">
                                <div className="col-4">
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
                                <div className="col-8">
                                    <div className="detailFilm__right">
                                        <div className="detailFilm__rightItem">
                                            <div className="cinema__timedetail">
                                                <ul>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
                                                    <li><a>13:55</a></li>
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
            </div>
        </div>
    )
}
