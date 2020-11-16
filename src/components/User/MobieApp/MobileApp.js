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
        <div className="mobileapp-component mt-5">
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
                                <a className="version" target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">
                                    iOS
                                </a>
                                &amp;
                                <a className="version" target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                                    Android
                                </a>
                                <br/>
                                <img src="/images/download-ios.svg" alt="ios"></img>
                                <img style={{width: 140}} src="/images/download-android.png" alt="android"></img>
                                </p>
                            </div>
                            </div>
                        <div className="col-12 col-md-12 col-lg-6">
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
