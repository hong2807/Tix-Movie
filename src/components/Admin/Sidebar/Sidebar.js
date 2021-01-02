import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faSignOutAlt, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export default function Sidebar(props) {
    const taikhoan = localStorage.getItem("userName");

    console.log('props',props)

    const clearLocalstorage = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("maLoaiNguoiDung");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("soDt");
        props.history.push("/dangnhap");
    };

    return (
        <div className="sidebar-component">
            <div className="sidebar__content">
                <div className="sidebar__logo">
                    <NavLink
                            exact 
                            to="/"
                            > <span>Tix</span>Movie
                    </NavLink>
                </div>

                <div className="sidebar__user">
                    <div className="sidebar__user-img">
                        <FontAwesomeIcon className="icon" icon={faUserCircle} />
			        </div>

                    <div className="sidebar__user-title">
                        <span>Admin</span>
                        <p className="mb-0">{taikhoan}</p>
                    </div>

                    <div className="sidebar__user-btn" onClick={clearLocalstorage}>
                        <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    </div>
		        </div>

                <div className="sidebar__nav">
                    <ul>
                        <li className="sidebar__nav-item">
                            <Link to="./quanlyphim" className={props.location.pathname === "/quanlyphim" ? "activeMenu" : ""}>
                                <FontAwesomeIcon className="icon" icon={faFilm} />
                                Phim
                            </Link>
                        </li>
                        <li className="sidebar__nav-item">
                            <Link to="./quanlynguoidung" className={props.location.pathname === "/quanlynguoidung" ? "activeMenu" : ""}>
                                <FontAwesomeIcon className="icon" icon={faUsers} />
                                Thành viên
                            </Link>
                        </li>
                        {/* <li className="sidebar__nav-item">
                            <Link to="./">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                Lịch chiếu
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}


