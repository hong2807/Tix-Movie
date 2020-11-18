import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    return (
        <div className="sidebar-component">
            <div className="sidebar__content">
                <div className="sidebar__logo">
                    <NavLink
                            exact 
                            to="/home"
                            > <span>Tix</span>Movie
                    </NavLink>
                </div>

                <div className="sidebar__user">
                    <div className="sidebar__user-img">
                        <FontAwesomeIcon className="icon" icon={faUserCircle} />
			        </div>

                    <div className="sidebar__user-title">
                        <span>Admin</span>
                        <p className="mb-0">John Doe</p>
                    </div>

                    <div className="sidebar__user-btn">
                        <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    </div>
		        </div>

                <div className="sidebar__nav">
                    <ul>
                        <li className="sidebar__nav-item">
                            <a href="./">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                Phim
                            </a>
                        </li>
                        <li className="sidebar__nav-item">
                            <a href="./">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                Thành viên
                            </a>
                        </li>
                        <li className="sidebar__nav-item">
                            <a href="./">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                Lịch chiếu
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


