import React from 'react'
import Slider from "react-slick";

import './Banner.scss'

export default function Banner() {
  // Slider
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  

  return (
    <div className="bannerComponent">
      <div className="container-fluid">
            <Slider {...settings}>
              <div className="banner__item">
                <img src="/images/banner-tiec-trang-mau.png" alt=""></img>
              </div>
              <div className="banner__item">
                <img src="/images/banner-rom.png" alt=""></img>
              </div>
              <div className="banner__item">
                <img src="/images/banner-cuc-no-hoa-cuc-cung.png" alt=""></img>
              </div>
            </Slider>
      </div>
    </div>
  )
}
