import React from 'react'
import './Banner.scss'
import Slider from "react-slick";


export default function Banner() {
  // Slider
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  

  return (
    <div className="banner-component">
      <div className="banner__content"> 
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
