import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import UserApi from "../../../api/services/UserApi";
import { getInfoUserAction } from "../../../redux/actions/UserManagementAction";

export default function Header(props) {
    const dispatch = useDispatch();

    const hoTen = useSelector((state) => state.UserManagementReducer.thongTinUser.hoTen);

    const clearLocalstorage = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("maLoaiNguoiDung");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("soDt");
        props.history.push("/dangnhap");
    };

    useEffect(() => {
        const data = {
            taiKhoan: localStorage.getItem("userName"),
        };

        UserApi.userInfo(data)
            .then((response) => {
                dispatch(getInfoUserAction(response.data));
            })
            .catch((error) => {
                console.log("error");
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnClick = () => {
        document.getElementsByClassName("hamburger-button")[0].classList.toggle("act");
        if (document.getElementsByClassName("hamburger-button")[0].classList.contains("act")) {
            document.getElementsByClassName("main-menu")[0].classList.add("act");
        } else {
            document.getElementsByClassName("main-menu")[0].classList.remove("act");
        }
    };
    
    return (
        <div className="header-component">
            <div className="container">
                <div className="header__content d-none d-md-flex ">
                    <ul className="header__left">
                        <li className="nav-item">
                            <Link className="nav-text" to="films-component" spy={true} smooth={true} offset={-80} duration={500}>
                                LỊCH CHIẾU
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-text" to="cinema-component" spy={true} smooth={true} offset={-80} duration={500}>
                                CỤM RẠP
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-text" to="mobileapp-component" spy={true} smooth={true} offset={-80} duration={500}>
                                ỨNG DỤNG
                            </Link>
                        </li>
                    </ul>
                    <div className="header__logo animate__swing">
                        <NavLink exact to="/">
                            <span>Tix</span>Movie
                        </NavLink>
                    </div>
                    <div className="header__right">
                        {localStorage.getItem("token") ? (
                            <div className="header__user">
                                Xin chào,
                                <div className="header__avatar">
                                    <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                </div>
                                <div className="header__text">
                                    <NavLink className="nav-text text-capitalize" exact to="/nguoidung">
                                        {hoTen}
                                    </NavLink>
                                </div>
                                <li className="signout" onClick={clearLocalstorage}>
                                    <p className="nav-text">ĐĂNG XUẤT</p>
                                </li>
                            </div>
                        ) : (
                            <ul className="header__sign">
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
                        )}
                    </div>
                </div>

                <div className="header__mobile d-flex d-lg-none">
                    <header className={localStorage.getItem("token") ? "has-login" : ""}>
                        {localStorage.getItem("token") && (
                            <div className="header__avatar">
                                <NavLink className="nav-text" exact to="/nguoidung">
                                    <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                </NavLink>
                            </div>
                        )}

                        <div className="header__logo animate__swing">
                            <NavLink exact to="/">
                                <span>Tix</span>Movie
                            </NavLink>
                        </div>

                        <a class="hamburger-button" onClick={handleOnClick}>
                            <span class="lines"></span>
                        </a>
                        
                        <nav class="main-menu">
                            <ul>
                                <li className="nav-item">
                                    <div className="header__logo animate__swing">
                                        <NavLink exact to="/">
                                            <span>Tix</span>Movie
                                        </NavLink>
                                    </div>
                                    {localStorage.getItem("token") && (
                                        <span className="sub-logo">
                                            Xin chào, <span>{hoTen}</span>
                                        </span>
                                    )}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-text" to="films-component" spy={true} smooth={true} offset={-80} duration={500} onClick={() => document.getElementsByClassName("hamburger-button")[0].click()}>
                                        LỊCH CHIẾU
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-text" to="cinema-component" spy={true} smooth={true} offset={-80} duration={500}>
                                        CỤM RẠP
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-text" to="mobileapp-component" spy={true} smooth={true} offset={-80} duration={500} onClick={() => document.getElementsByClassName("hamburger-button")[0].click()}>
                                        ỨNG DỤNG
                                    </Link>
                                </li>
                                {!localStorage.getItem("token") ? (
                                    <React.Fragment>
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
                                    </React.Fragment>
                                ) : (
                                    <li className="signout">
                                        <Link className="nav-text" onClick={clearLocalstorage}>
                                            ĐĂNG XUẤT
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        </div>
    );
}
