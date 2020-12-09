import React from 'react'
import './FilmItem.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faInfoCircle, faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import utils from '../../../helper/utils';
import { Link } from "react-router-dom";

export default function FilmItem(props) {

    return (
        <div className="filmitem-component">
              <div className="film__wrapper">
                <div className="film__item">
                  <img className="w-100" src={props.filmInfo.hinhAnh} alt="" data-action="" />
                  <div className="film-overlay"></div>
                  <div className="film-icon">
                    <div className="film-group">
                      <FontAwesomeIcon onClick={()=> {
                        props.modal(props.filmInfo.trailer)
                      }} className="icon" icon={faPlayCircle} />
                      <p className="text-center">Trailer</p>
                    </div>
                    <Link to={`/phim/${props.filmInfo.maPhim}`}className="film-group">
                      <FontAwesomeIcon  className="icon" icon={faInfoCircle} />
                      <p className="text-center">Detail</p>
                    </Link>
                  </div>
                </div>
                <div className="film-text">
                  <h6 className="text-center film-name">{props.filmInfo.tenPhim}</h6>
                  <div className="sub-text">
                    <div className="film-calendar">
                        <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
                        <p>Khởi chiếu: {utils.handleDate(props.filmInfo.ngayKhoiChieu)}</p>
                    </div>
                    <div className="film-rating">
                      <FontAwesomeIcon className="icon" icon={faStar} />
                      <p>{props.filmInfo.danhGia}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}
