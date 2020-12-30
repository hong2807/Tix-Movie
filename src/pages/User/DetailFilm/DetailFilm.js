import React, { useState, useEffect } from 'react'
import './DetailFilm.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import FilmApi from '../../../api/services/FilmApi';
import utils from '../../../helper/utils';
import ModalVideo from "react-modal-video";
import { Link } from "react-scroll";
import { Link  as Linkreact } from "react-router-dom";

export default function DetailFilm(props) {
    const [filmDetail,setFilmDetail] = useState([]);

    const [cinemaList,setCinemaList] = useState([]);

    const [activeCinema, setActiveCinema] = useState(0);

    const [cinemaDetailList,setCinemaDetailList] = useState([]);

    // Popup video
    const [isOpen, setOpen] = useState(false);

    useEffect( () => {
        const maPhim = props.match.params.maphim
        FilmApi.getFilmDetail(maPhim)
        .then(response => {
            console.log('filmdetail',response.data);
            setFilmDetail(response.data);
            setCinemaList(response.data.heThongRapChieu);
            setCinemaDetailList(response.data.heThongRapChieu[0].cumRapChieu);
        })
        .catch(error => {
            console.log('error',error.response.data);
        })
    },[])

    const renderCinemaList = () => {
        return cinemaList.map((item,index) => {
            return  <li key={index} className={activeCinema === index ? 'active text-capitalize' : 'text-capitalize'} onClick={ () => {setActiveCinema(index); setCinemaDetailList(cinemaList[index].cumRapChieu)}}>
                <img src={item.logo} alt={item.logo}/>
                <br></br>
                {item.tenHeThongRap.replace('Cinema', '').replace('Star Cineplex', '')}
            </li>
        })
    }

    const renderTicket = (timeList) => {
        return timeList.map((item,index) => {
            console.log("detailfilm",item)
            return <li key={index}><Linkreact to={`/datve/${item.maLichChieu}`}>{utils.handleTime(item.ngayChieuGioChieu)}</Linkreact></li>
        })
    }

    const renderCinemaDetailList = () => {
        return cinemaDetailList.map((item,index) => {
            return  <div className="detailFilm__timeItem" key={index}>
            <div className="row">
                <div className="col-12 col-md-5">
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
                <div className="col-12 col-md-7">
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
                        <div className="col-12 col-md-3">
                            <div className="detailFilm__infoLeft">
                                <img className="w-100" src={filmDetail.hinhAnh} alt={filmDetail.tenPhim}></img>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
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
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen}  videoId={filmDetail.trailer && utils.getVideoIdFromYoutubeLink(filmDetail.trailer)} onClose={() => setOpen(false)} />
                                    <button className="btn btn-trailer btn-film mr-3" onClick={()=> setOpen(true)}>
                                        
                                        <FontAwesomeIcon className="icon" icon={faPlayCircle}/>
                                        Trailer
                                    </button>
                                    <Link
                                        className="btn btn-film"
                                        to="detailFilm__showtimes"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                    >
                                        <FontAwesomeIcon className="icon" icon={faTicketAlt} />
                                        Mua vé
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-2 detailFilm__infoRight-wrapper">
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
                            <li className="day-item active">
                                <p className="day-top">
                                    <span className='d-none d-md-block'>Thứ 2</span>
                                    <span className='d-block d-md-none'>T2</span>
                                </p>
                                <p className="day-bottom">
                                    10
                                </p>
                            </li>
                            <li className="day-item">
                                <p className="day-top">
                                    <span className='d-none d-md-block'>Thứ 3</span>
                                    <span className='d-block d-md-none'>T3</span>
                                </p>
                                <p className="day-bottom">
                                    11
                                </p>
                            </li>
                            <li className="day-item">
                                <p className="day-top">
                                    <span className='d-none d-md-block'>Thứ 4</span>
                                    <span className='d-block d-md-none'>T4</span>
                                </p>
                                <p className="day-bottom">
                                    12
                                </p>
                            </li>
                            <li className="day-item">
                                <p className="day-top">
                                    <span className='d-none d-md-block'>Thứ 5</span>
                                    <span className='d-block d-md-none'>T5</span>
                                </p>
                                <p className="day-bottom">
                                    13
                                </p>
                            </li>
                            <li className="day-item">
                                <p className="day-top">
                                    <span className='d-none d-md-block'>Thứ 6</span>
                                    <span className='d-block d-md-none'>T6</span>
                                </p>
                                <p className="day-bottom">
                                    14
                                </p>
                            </li>
                            <li className="day-item">
                                <p className="day-top">
                                    <span className='d-none d-md-block'>Thứ 7</span>
                                    <span className='d-block d-md-none'>T7</span>
                                </p>
                                <p className="day-bottom">
                                    15
                                </p>
                            </li>
                            <li className="day-item">
                                <p className="day-top">
                                    <span className='d-none d-md-block'>C.Nhật</span>
                                    <span className='d-block d-md-none'>CN</span>
                                </p>
                                <p className="day-bottom">
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
