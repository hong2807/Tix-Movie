import React from 'react'
import './Footer.scss'


export default function Footer() {
    return (
        <div className="footer-component">
            <div className="container">
                <div className="footer__policy">
                    <div className="footer__policyContent">
                        <div className="row">
                            <div className="col-3">
                                <div className="footer__tix">
                                    <h5>TIX</h5>
                                    <ul>
                                        <li><a href="./">FAQ</a></li>
                                        <li><a href="./">Brand Guidelines</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__tixPolicy">
                                    <h5>Điều khoản sử dụng</h5>
                                    <ul>
                                        <li><a href="./">Thỏa thuận sử dụng</a></li>
                                        <li><a href="./">Chính sách bảo mật</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__tixFollowus">
                                    <h5>Kết nối với chúng tôi</h5>
                                    <ul>
                                        <li><a href="./"><img src="/images/facebook.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/zalo-logo.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/android.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/apple.png" alt=""></img></a></li>
                                    </ul>
                                    <div className="footer__permission">
                                        <img src="/images/daThongBao.png" alt=''></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="footer__tixPay">
                                    <h5>Thanh toán</h5>
                                    <ul>
                                        <li><a href="./"><img src="/images/zalopay_icon.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/payoo.jpg" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/VCB.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/AGRIBANK.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/VIETTINBANK.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/IVB.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/123go.png" alt=""></img></a></li>
                                        <li><a href="./"><img src="/images/laban.png" alt=""></img></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__address">
                    <div className="footer__addressContent">
                        <div className="row">
                            <div className="col-12 col-md-2">
                                <div className="footer__addressLogo">
                                    <img src="/images/zion-logo.jpg" alt=''></img>
                                </div>
                            </div>
                            <div className="col-12 col-md-10">
                                <div className="footer__addressText">
                                <h5>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</h5>
                                <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam..</p>
                                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020  do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                                <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                                <p>Email: <a href="mailto:support@tix.vn">support@tix.vn</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
