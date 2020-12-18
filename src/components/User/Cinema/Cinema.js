import React, { useEffect, useState } from 'react'
import CinemaApi from '../../../api/services/CinemaApi'
import './Cinema.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import utils from '../../../helper/utils';
import { Link } from "react-router-dom";

export default function Cinema() {
    const [cinemaList, setCinemaList] = useState([]);

    const [cinemaDetailList, setCinemaDetailList] = useState([]);

    const [selectedActive, setSelectedActive] = useState('BHDStar');

    const [showtimeDetailList, setShowtimeDetailList] = useState([]);

    const [activeCinema,setActiveCinema] = useState(0);
    

    useEffect(() => {
        CinemaApi.getCinemaList()
            .then((response) => {
                console.log("cinemaList", response.data);
                setCinemaList(response.data)
            })
            .catch((error) => {
                console.log("error", error.response.data);
        });
    }, [])

    useEffect(() => {
        CinemaApi.getCinemaDetailList(selectedActive)
            .then((response) => {
                console.log("cinemaDetailList", response.data[0].lstCumRap);
                setCinemaDetailList(response.data[0].lstCumRap)
                setShowtimeDetailList(response.data[0].lstCumRap[0].danhSachPhim)
            })
            .catch((error) => {
                console.log("error", error.response.data);
        });
    }, [])

    const renderCinemaList = () => {
        return cinemaList.map((item,index) => {
            return <li onClick={ () => { callApiCinemaDetailList(item.maHeThongRap); setActiveCinema(0)}} key={index} className={selectedActive === item.maHeThongRap  ? 'active text-capitalize' : 'text-capitalize'}>
                <img src={item.logo} alt={item.logo}/>
                <br></br>
                {item.tenHeThongRap}
            </li>
        })
    }

    const callApiCinemaDetailList = (idCinema) => {
        setSelectedActive(idCinema);
        CinemaApi.getCinemaDetailList(idCinema)
        .then((response) => {
            console.log("cinemaDetailList", response.data[0].lstCumRap);
            setCinemaDetailList(response.data[0].lstCumRap)
            setShowtimeDetailList(response.data[0].lstCumRap[0].danhSachPhim)
        })
        .catch((error) => {
            console.log("error", error.response.data);
        });
    }

    const renderCinemaDetailList = () => {
        return cinemaDetailList.map((item,index) => {
            return <Link to={`/rapphim/${selectedActive}/${item.maCumRap}`} className={activeCinema === index ? 'active cinema__addressItem' : 'cinema__addressItem'} key={index} onClick={ () => {
                setShowtimeDetailList(item.danhSachPhim);
                setActiveCinema(index)
                }
            }>
            <div className="inside">
                <div className="inside-text">
                    <h4 className="title text-capitalize">{item.tenCumRap}</h4>
                    <p className='text-capitalize'>{item.diaChi}</p>
                </div>
            </div>
            <div className="detail">
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
                <a href="./" className="more-detail">Xem chi tiết</a>
            </div>                   
        </Link>
        })
    }

    const renderTicket = (timeList) => {
        return timeList.map((item,index) => {
            return <li key={index}><Link to={`/datve/${item.maLichChieu}`}>{utils.handleTime(item.ngayChieuGioChieu)}</Link></li>
        })
    }

    const renderShowTimeDetailList = () => {
        return showtimeDetailList.map((item,index) => {
            return <div className="cinema__showtimeItem" key={index}>
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
            <div className="cinema__timedetail">
                <ul>
                    {item.lstLichChieuTheoPhim && item.lstLichChieuTheoPhim.length > 0 && renderTicket(item.lstLichChieuTheoPhim)}
                </ul>
            </div>
        </div> 
        })
    }

    return (
        <div id="cinema-component" className="cinema-component">
            <div className="container">
                <div className="cinema-content">
                    <div className="cinema__brand">
                        <ul>
                            {renderCinemaList()}
                        </ul>
                    </div>
                    <div className="cinema__detail scrollbarCinema styleScrollBar ">
                        <div className="cinema__detailContent "> 
                            <div className="row">
                                <div className="col-4">
                                    <div className="cinema__address">
                                        {renderCinemaDetailList()}
                                    </div>
                                </div>

                                <div className="col-8">
                                    <div className="cinema__showtime">
                                        {renderShowTimeDetailList()}
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



                                
                            