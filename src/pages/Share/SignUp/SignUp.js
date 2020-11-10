import React from 'react'
import { NavLink } from 'react-router-dom'
import './SignUp.scss'

export default function SignUp() {
    return (
        <div className="signup-component">
            <div className="sign__content">
            <div className="logo text-center">
                <NavLink exact to="/home"> 
                    <span>Tix</span>Movie
                </NavLink>
            </div>
            <form>
                <div className="row">
                    <div className="col-6">
                        <div className="form-left">
                            <h2>Thông tin đăng nhập</h2>
                            <div className="sign__group">
                                <input type="text" className="form-control"  placeholder="Tên tài khoản" />
                            </div>
                            <div className="sign__group">
                                <input type="password" className="form-control" placeholder="Mật khẩu" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-right">
                        <h2>Thông tin cá nhân</h2>
                <div className="sign__group">
                    <input type="text" className="form-control"  placeholder="Họ Tên" />
                </div>
                <div className="sign__group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="sign__group">
                    <input type="text" className="form-control" placeholder="Số điện thoại" />
                </div>
                        </div>
                    </div>
                </div>
                
               
                <button type="submit" className="btn btn-submit">
                    Đăng ký
                </button>
                <p className="text-center sign__text">Bạn đã có tài khoản chưa? 
                    <span> 
                        <NavLink exact to="/dangnhap"> 
                             Đăng nhập!
                        </NavLink>
                    </span>
                </p>
            </form>
        </div>
        </div>
    )
}
