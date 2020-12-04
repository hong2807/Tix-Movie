import React, {useState} from 'react'
import './FilmItem.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faInfoCircle, faPlayCircle, faStar } from "@fortawesome/free-solid-svg-icons";

export default function FilmItem(props) {
  // Moment
  var moment = require('moment')

 
    return (
        <div className="filmitem-component">
              <div className="film__wrapper">
                <div className="film__item">
                  <img style={{width: 220, height: 330}} src={props.filmInfo.hinhAnh} alt="" data-action="" />
                  <div className="film-overlay"></div>
                  <div className="film-icon">
                    <div className="film-group">
                      <FontAwesomeIcon onClick={()=> {
                        props.modal(props.filmInfo.trailer)
                      }} className="icon" icon={faPlayCircle} />
                      <p className="text-center">Trailer</p>
                    </div>
                    <div className="film-group">
                      <FontAwesomeIcon  className="icon" icon={faInfoCircle} />
                      <p className="text-center">Detail</p>
                    </div>
                  </div>
                </div>
                <div className="film-text">
                  <h6 className="text-center film-name">{props.filmInfo.tenPhim}</h6>
                  <div className="sub-text">
                    <div className="film-calendar">
                        <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
                        <p>Khởi chiếu: {moment(props.filmInfo.ngayKhoiChieu).format('L')}</p>
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
