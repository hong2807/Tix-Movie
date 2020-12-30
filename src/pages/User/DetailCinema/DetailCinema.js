import React, { useEffect, useState } from 'react'
import './DetailCinema.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLandmark, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import CinemaApi from '../../../api/services/CinemaApi';
import utils from '../../../helper/utils';
// import { Link } from "react-scroll";
import { Link } from "react-scroll";
import { Link  as Linkreact } from "react-router-dom";

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
                return item.maCumRap !== maChiTietRap
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
                                    {/* <ul className="branch__list">
                                    <li className="brach__item">
                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                                        <br></br>
                                        BHD Star - Vincom Lê Văn Việt
                                    </li>
                                    <li className="brach__item">
                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                                        <br></br>
                                        BHD Star - Vincom Quang Trung
                                    </li>
                                    <li className="brach__item">
                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                                        <br></br>
                                        BHD Star - 3/2
                                    </li>
                                    <li className="brach__item">
                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                                        <br></br>
                                        BHD Star - Phạm Hùng
                                    </li>
                                    <li className="brach__item">
                                        <img src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"/>
                                        <br></br>
                                        BHD Star - Vincom Thảo Điền
                                    </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detailCinema__showtimes">
                    <div className="detailCinema__day">
                        <h3 className='detailCinema__day__title'><span>01. </span>Chọn Ngày</h3>
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
                    
                    <div className="detailCinema__time">
                        <h3 className='detailCinema__day__title'><span>02. </span>Chọn Phim & Suất Chiếu</h3>
                        {renderFilmList()}
                    </div>
                </div>
            </div>
        </div>
    )
}
