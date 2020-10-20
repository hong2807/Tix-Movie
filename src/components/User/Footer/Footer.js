import React from 'react'
import './Footer.scss'


export default function Footer() {
    return (
        <div className="footerComponent mt-5">
            <div className="container">
                <div className="footer__partner">
                    <div className="footer__partnerContent">
                        <ul className="text-center">
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/cgv.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/bhd.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/galaxycine.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/cinestar.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/lotteria.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/megags.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/bt.jpg"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/TOUCH.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/cnx.jpg"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/STARLIGHT.png"></img>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="">
                                <img src="./images/dcine.png"></img>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="footer__policy">
                    <div className="footer__policyContent">
                        <div className="row">
                            <div className="col-3">
                                <div className="footer__tix">
                                    <h5>TIX</h5>
                                    <ul>
                                        <li><a>FAQ</a></li>
                                        <li><a>Brand Guidelines</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__tixPolicy">
                                    <h5>Điều khoản sử dụng</h5>
                                    <ul>
                                        <li><a>Thỏa thuận sử dụng</a></li>
                                        <li><a>Chính sách bảo mật</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__tixFollowus">
                                    <h5>Kết nối với chúng tôi</h5>
                                    <ul>
                                        <li><a><img src="./images/facebook.png"></img></a></li>
                                        <li><a><img src="./images/zalo-logo.png"></img></a></li>
                                        <li><a><img src="./images/android.png"></img></a></li>
                                        <li><a><img src="./images/apple.png"></img></a></li>
                                    </ul>
                                    <div className="footer__permission">
                                        <img  src="./images/daThongBao.png"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__tixPay">
                                    <h5>Thanh toán</h5>
                                    <ul>
                                        <li><a><img src="./images/zalopay_icon.png"></img></a></li>
                                        <li><a><img src="./images/payoo.jpg"></img></a></li>
                                        <li><a><img src="./images/VCB.png"></img></a></li>
                                        <li><a><img src="./images/AGRIBANK.png"></img></a></li>
                                        <li><a><img src="./images/VIETTINBANK.png"></img></a></li>
                                        <li><a><img src="./images/IVB.png"></img></a></li>
                                        <li><a><img src="./images/123go.png"></img></a></li>
                                        <li><a><img src="./images/laban.png"></img></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__address">
                    <div className="footer__addressContent">
                        <div className="row">
                            <div className="col-2">
                                <div className="footer__addressLogo">
                                    <img src="./images/zion-logo.jpg"></img>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="footer__addressText">
                                <h3>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h3>
                                <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam..</p>
                                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020  do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                                <p>Email: </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
