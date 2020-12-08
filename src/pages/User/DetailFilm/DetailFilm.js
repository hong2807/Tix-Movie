import React, { useState, useEffect } from 'react'
import './DetailFilm.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import FilmApi from '../../../api/services/FilmApi';
import utils from '../../../helper/utils';

export default function DetailFilm() {
    const [filmDetail,setFilmDetail] = useState([]);

    const [cinemaList,setCinemaList] = useState([]);

    const [activeCinema, setActiveCinema] = useState(0);

    const [cinemaDetailList,setCinemaDetailList] = useState([]);

    useEffect( () => {
        FilmApi.getFilmDetail()
        .then(response => {
            console.log('filmdetail',response.data);
            setFilmDetail(response.data);
            setCinemaList(response.data.heThongRapChieu);
            setCinemaDetailList(response.data.heThongRapChieu[0].cumRapChieu);
        })
        .catch(error => {
            console.log('filmdetail',error.data);
        })
    })

    const renderCinemaList = () => {
        return cinemaList.map((item,index) => {
            return  <li key={index} className={activeCinema === index ? 'active text-capitalize' : 'text-capitalize'} onClick={ () => {setActiveCinema(index)}}>
                <img src={item.logo} alt={item.logo}/>
                <br></br>
                {item.tenHeThongRap}
            </li>
        })
    }

    const renderTicket = (timeList) => {
        return timeList.map((item,index) => {
            return <li key={index}><a href="./">{utils.handleTime(item.ngayChieuGioChieu)}</a></li>
        })
    }

    const renderCinemaDetailList = () => {
        return cinemaDetailList.map((item,index) => {
            return  <div className="detailFilm__timeItem">
            <div className="row">
                <div className="col-5">
                    <div className="detailFilm__left">
                        <div className="detailFilm__leftItem">
                            <div className="inside">
                                <div className="inside-text">
                                    <h4 className="title">{item.tenCumRap}</h4>
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
                                    <ul> {renderTicket(item.lichChieuPhim)}
                                    </ul>
                                </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        })
    }
        
        
    
    return (
        <div className="detailFilm-component component-padding">
            <div className="container">
                <div className="detailFilm__info">
                    <div className="row">
                        <div className="col-3">
                            <div className="detailFilm__infoLeft">
                                <img className="w-100" src={filmDetail.hinhAnh} alt={filmDetail.tenPhim}></img>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="detailFilm__infoCenter">
                                <h3 className="film-name">{filmDetail.tenPhim}</h3>
                                <p>
                                    {filmDetail.moTa}
                                </p>
                                <ul>
                                    <li>    
                                        <label>Khởi chiếu:</label>
                                        <span>{utils.handleDate(filmDetail.ngayKhoiChieu)}</span>
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
                                    <span>{filmDetail.danhGia}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailFilm__showtimes">
                    <h3 className='detailFilm__day__title'><span>01. </span>Chọn Rạp</h3>
                    <div className="detailFilm__brand">
                        <ul>
                            {renderCinemaList()}
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
                        {renderCinemaDetailList()}

                       
                    </div>
                </div>
            </div>
        </div>
    )
}
