import React, { useEffect, useState } from 'react'
import './DetailCinema.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import CinemaApi from '../../../api/services/CinemaApi';
import utils from '../../../helper/utils';
// import { Link } from "react-scroll";
import { Link } from "react-scroll";
import { Link  as Linkreact } from "react-router-dom";
import { setPreloader } from "../../../redux/actions/PreloaderAction";
import { useDispatch } from "react-redux";
import { TIME_SHOW_PRELOADER } from "../../../redux/constants/PreloaderConstant";

export default function DetailCinema(props) {
    // Moment
    let moment = require('moment')
    
    const maRap = props.match.params.marapphim;
    const maChiTietRap = props.match.params.chitietrapphim;

    const dispatch = useDispatch();

    const [cinemaDetail,setCinemaDetail] = useState({});
    
    const [cinemaBranch,setCinemaBranch] = useState({});

    const [filmList,setFilmList] = useState();

    
    useEffect(() => {
        dispatch(setPreloader(true));
        setTimeout(() => dispatch(setPreloader(false)), TIME_SHOW_PRELOADER);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maChiTietRap]);

    useEffect( () => {
        CinemaApi.getCinemaDetailList(maRap)
        .then(response => {
            const cinemaFilter = response.data[0].lstCumRap.filter((item) => {
                return item.maCumRap === maChiTietRap
            })

            const listBranch = response.data[0].lstCumRap.filter((item) => {
                return item.maCumRap !== maChiTietRap
            })

            setCinemaDetail(cinemaFilter[0]);
            setCinemaBranch(listBranch);
            setFilmList(cinemaFilter[0].danhSachPhim);
        })
        .catch(error => {
            console.log('cinemaDetailList',error.response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[maRap,maChiTietRap])


    const renderCinemaBranch = () => {
        return Array.isArray(cinemaBranch) && cinemaBranch.map((item,index) => {
            return  <Linkreact to={`/rapphim/${props.match.params.marapphim}/${item.maCumRap}`} className="btn branch" key={index}>
                        <FontAwesomeIcon className="icon" icon={faLandmark} />
                        {item.tenCumRap}
                    </Linkreact>
        })
    }

    const renderTicket = (timeList) => {
        return timeList.map((item,index) => {
            return <li key={index}><Linkreact to={`/datve/${item.maLichChieu}`}>{utils.handleTime(item.ngayChieuGioChieu)}</Linkreact></li>
        })
    }

    const renderFilmList = () => {
        return Array.isArray(filmList) && filmList.map((item,index) => {
            return  <div className="detailCinema__timeItem" key={index}>
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="detailCinema__left">
                                    <div className="detailCinema__leftItem">
                                        <div className="inside">
                                            <div className="row">
                                                <div className="col-3 col-md-2">
                                                    <div className="inside-img">
                                                        <img src={item.hinhAnh} alt=""></img>
                                                    </div>
                                                </div>
                                                <div className="col-9 col-md-10">
                                                    <div className="inside-text">
                                                        <div className="film-type">
                                                            <span className="film-version">2D DUB</span>
                                                            <span className="film-rating">C18</span>
                                                        </div>
                                                        <p>{item.tenPhim}</p>
                                                        <p>100 phút</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="detailCinema__right">
                                    <div className="detailCinema__rightItem">
                                        <div className="cinema__timedetail">
                                                <ul>
                                                    {renderTicket(item.lstLichChieuTheoPhim)}
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
            dayHTML.push(<li key={i} className={i === 0 ? 'active day-item' : 'day-item'}>
                <p className="day-top">
                    <span className="d-none d-sm-block"> {day === 6 ?  utils.converday(day) : `Thứ ${utils.converday(day)}` }</span>
                    <span className='d-block d-sm-none'>{day === 6 ?  'CN' : `T ${utils.converday(day)}` }</span>
                </p>
                <p className="day-bottom">
                    {thu}
                </p>
            </li>);
        }
        return dayHTML;
    }

    return (
        <div className="detailCinema-component component-padding">
            <div className="container">
                <div className="detailCinema__info">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="detailCinema__infoLeft">
                                <img className="w-100" src="/images/bhd-star-bitexco-rap.jpg" alt="rap"></img>
                            </div>
                        </div>

                        <div className="col-12 col-md-9">
                            <div className="detailCinema__infoRight">
                                <div className="detailCinema__address">
                                    <h3 className="film-name">{cinemaDetail.tenCumRap}</h3>
                                    <p>
                                        {cinemaDetail.diaChi}
                                    </p>
                                    <div className="detailCinema__btn">
                                    <Link
                                        className="btn"
                                        to="detailCinema__showtimes"
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
                               
                                <div className="detailCinema__branch">
                                    {renderCinemaBranch()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailCinema__showtimes">
                    <div className="detailCinema__day">
                        <h3 className='detailCinema__day__title'><span>01. </span>Chọn Ngày</h3>
                        <ul>
                            {showDay()}
                        </ul>
                    </div>
                    
                    <div className="detailCinema__time">
                        <h3 className='detailCinema__day__title'><span>02. </span>Chọn Phim & Suất Chiếu</h3>
                        {renderFilmList()}
                    </div>
                </div>
            </div>
        </div>
    )
}
