import React from "react";
import Slider from "react-slick";
import './MobileApp.scss'

export default function MobileApp() {
    // Slick
    const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1
    };

    return (
        <div className="mobileappComponent">
            <div className="container">
                <div className="mobileapp__content">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="mobileapp__left">
                                <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                                <br />
                                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                <br />
                                <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                                <p className="textApp">
                                TIX có hai phiên bản
                                <a className="version" target="_blank" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">
                                    iOS
                                </a>
                                &amp;
                                <a className="version" target="_blank" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                                    Android
                                </a>
                                </p>
                            </div>
                            </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="mobileapp__right">
                                {/* <img className="mobileapp-mobile" src="/images/mobile.png" alt /> */}
                                <div className="mobileapp__slider">
                                    <Slider {...settings}>
                                        <div className="item">
                                            {/* <img src="/images/mobile1.jpg" alt="mobile1" /> */}
                                            1
                                        </div>
                                        <div className="item">
                                            {/* <img src="/images/mobile2.jpg" alt="mobile1" /> */}
                                            2
                                        </div>
                                        <div className="item">
                                            {/* <img src="/images/mobile3.jpg" alt="mobile1" /> */}
                                            3
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
