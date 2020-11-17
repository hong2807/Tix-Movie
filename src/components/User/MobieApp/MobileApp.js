import React from "react";
import './MobileApp.scss'
import Slider from "react-slick";

export default function MobileApp() {
    // Slick
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 200,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };

    return (
        <div className="mobileapp-component component-padding">
            <div className="container">
                <div className="mobileapp__content">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-7">
                            <div className="mobileapp__left">
                                <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
                                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                                <div className="download">
                                    <a className="version" target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">
                                        <img src="/images/download-ios.svg" alt="ios"></img>
                                    </a>
                                
                                    <a className="version" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                                        <img src="/images/download-android.png" alt="android"></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-5">
                            <div className="mobileapp__right">
                                {/* <img className="mobileapp-mobile" src="/images/mobile.png" alt /> */}
                                <img src="/images/mobile.png" alt="mobile" />
                                <div className="mobileapp__slider">
                                    <Slider {...settings}>
                                        <div className="item">
                                            <img src="/images/mobile2.jpg" alt="mobile2" />
                                        </div>
                                        <div className="item">
                                            <img src="/images/mobile3.jpg" alt="mobile3" />
                                        </div>
                                        <div className="item">
                                            <img src="/images/mobile4.jpg" alt="mobile4" />
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
