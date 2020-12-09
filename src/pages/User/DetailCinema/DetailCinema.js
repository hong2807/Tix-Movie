import React, { useEffect, useState } from 'react'
import './DetailCinema.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import CinemaApi from '../../../api/services/CinemaApi';
import utils from '../../../helper/utils';
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";

export default function DetailCinema(props) {
    const [cinemaDetail,setCinemaDetail] = useState({});
    
    const [cinemaBranch,setCinemaBranch] = useState({});

    const [filmList,setFilmList] = useState();

    const maRap = props.match.params.marapphim;
    const maChiTietRap = props.match.params.chitietrapphim;

    useEffect( () => {
        CinemaApi.getCinemaDetailList(maRap)
        .then(response => {
            console.log('cinemaDetailList',response.data);
            const cinemaFilter = response.data[0].lstCumRap.filter((item) => {
                return item.maCumRap === maChiTietRap
            })

            const listBranch = response.data[0].lstCumRap.filter((item) => {
                return item.maCumRap != maChiTietRap
            })

            setCinemaDetail(cinemaFilter[0]);
            setCinemaBranch(listBranch);
            setFilmList(cinemaFilter[0].danhSachPhim);
        })
        .catch(error => {
            console.log('cinemaDetailList',error.response.data)
        })
    },[maRap,maChiTietRap])

    const renderCinemaBranch = () => {
        return Array.isArray(cinemaBranch) && cinemaBranch.map((item,index) => {
            console.log(props.match.params.marapphim)
            console.log(item.maCumRap)
            return  <Link to={`/rapphim/${props.match.params.marapphim}/${item.maCumRap}`} className="btn branch" key={index}>
                        <FontAwesomeIcon className="icon" icon={faLandmark} />
                        {item.tenCumRap}
                    </Link>
        })
    }

    const renderTicket = (timeList) => {
        return timeList.map((item,index) => {
            return <li key={index}><a href="./">{utils.handleTime(item.ngayChieuGioChieu)}</a></li>
        })
    }

    const renderFilmList = () => {
        return Array.isArray(filmList) && filmList.map((item,index) => {
            return  <div className="detailFilm__timeItem" key={index}>
                        <div className="row">
                            <div className="col-5">
                                <div className="detailFilm__left">
                                    <div className="detailFilm__leftItem">
                                        <div className="inside">
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="inside-img">
                                                        <img src={item.hinhAnh} alt=""></img>
                                                    </div>
                                                </div>
                                                <div className="col-10">
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
                            <div className="col-7">
                                <div className="detailFilm__right">
                                    <div className="detailFilm__rightItem">
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
                        {renderFilmList()}
                    </div>
                </div>
            </div>
        </div>
    )
}
