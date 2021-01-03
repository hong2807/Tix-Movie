import React, { useState, useEffect } from 'react'
import './DetailFilm.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import FilmApi from '../../../api/services/FilmApi';
import utils from '../../../helper/utils';
import ModalVideo from "react-modal-video";
import { Link } from "react-scroll";
import { Link  as Linkreact } from "react-router-dom";
import { setPreloader } from "../../../redux/actions/PreloaderAction";
import { useDispatch } from "react-redux";
import { TIME_SHOW_PRELOADER } from "../../../redux/constants/PreloaderConstant";

 export default function DetailFilm(props) {
    let moment = require('moment')

    const dispatch = useDispatch();

    const [filmDetail,setFilmDetail] = useState([]);

    const [cinemaList,setCinemaList] = useState([]);

    const [activeCinema, setActiveCinema] = useState(0);

    const [cinemaDetailList,setCinemaDetailList] = useState([]);

    const [isOpen, setOpen] = useState(false); // Popup video

    useEffect(() => {
        dispatch(setPreloader(true));
        setTimeout(() => dispatch(setPreloader(false)), TIME_SHOW_PRELOADER);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect( () => {
        const maPhim = props.match.params.maphim
        FilmApi.getFilmDetail(maPhim)
        .then(response => {
            setFilmDetail(response.data);
            setCinemaList(response.data.heThongRapChieu);
            setCinemaDetailList(response.data.heThongRapChieu[0].cumRapChieu);
        })
        .catch(error => {
            console.log('error',error.response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const showDay = () => {
        const dayHTML = [];
        for(let i = 0; i < 7; i++) {
            let today = moment();
            let tomorrow  = moment(today).add(i,'days');
            let day = tomorrow.get('days');
            let thu = tomorrow.get('date');
            dayHTML.push(<li className={i === 0 ? 'active day-item' : 'day-item'}>
                <p className="day-top">
                    <span className="d-none d-sm-block"> {day === 0 ?  utils.converday(day) : `Thứ ${utils.converday(day)}` }</span>
                    <span className='d-block d-sm-none'>{day === 0 ?  'CN' : `T ${utils.converday(day)}` }</span>
                </p>
                <p className="day-bottom">
                    {thu}
                </p>
            </li>);
        }
        return dayHTML;
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
                            {showDay()}
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
