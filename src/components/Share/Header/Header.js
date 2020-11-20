import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    return (
        <div className="header-component">
            <div className="container">
                <div className="header__content">
                    <ul className="header__left">
                        <li className="nav-item">
                            <Link className="nav-text" 
                                to="films-component"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}> 
                                LỊCH CHIẾU 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-text"
                                to="cinema-component"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}>
                                CỤM RẠP    
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-text"
                                to="mobileapp-component"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}> 
                                ỨNG DỤNG
                            </Link>
                        </li>
                    </ul>
                    <div className="header__logo animate__swing">
                        <NavLink
                                exact 
                                to="/home"
                                > <span>Tix</span>Movie
                        </NavLink>
                    </div>
                    <ul className="header__right">
                        <li className="signup">
                            <NavLink className="nav-text" exact to="/dangky"> 
                                ĐĂNG KÝ
                            </NavLink>
                        </li>
                        <li className="signin"> 
                            <NavLink className="nav-text" exact to="/dangnhap"> 
                                ĐĂNG NHẬP
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
