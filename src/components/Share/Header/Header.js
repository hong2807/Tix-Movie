import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
export default function Header() {
    return (
        <div className="header-component">
            {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <NavLink  
                                    exact 
                                    className="nav-link" 
                                    to="/home"
                                    activeClassName="activeMenuItem"
                                    activeStyle={{fontWeight:'bold'}}
                                    >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  
                                    exact 
                                    className="nav-link" 
                                    activeClassName="activeMenuItem"
                                    to="/login"
                                    activeStyle={{fontWeight:'bold'}}                                   
                                    >Login</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}
            <div className="navigation container-fluid">
                <ul className="menu">
                    <li><NavLink 
                            exact 
                            className="nav-link" 
                            to="/home"
                            > LỊCH CHIẾU 
                        </NavLink>
                    </li>
                    <li><NavLink 
                            exact 
                            className="nav-link" 
                            to="/home"
                            > CỤM RẠP
                        </NavLink>
                    </li>
                    <li><NavLink 
                            exact 
                            className="nav-link" 
                            to="/home"
                            > ỨNG DỤNG
                        </NavLink>
                    </li>
                </ul>
                <div className="logo animate__swing">
                   <a><span>Tix</span>Movie</a>
                </div>
                <ul className="sign">
                    <li className="signup"><NavLink 
                            exact 
                            to="/signin"
                            > ĐĂNG KÝ
                        </NavLink></li>
                    <li className="signin"><a>ĐĂNG NHẬP</a></li>
                </ul>
            </div>
        </div>

    )
}
