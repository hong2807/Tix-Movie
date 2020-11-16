import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'


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
                    <li className="nav-item">
                        <NavLink className="nav-text" exact to="/home"> 
                            LỊCH CHIẾU 
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-text" exact to="/home"> 
                            CỤM RẠP    
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-text" exact to="/home"> 
                            ỨNG DỤNG
                        </NavLink>
                    </li>
                </ul>
                <div className="logo animate__swing">
                    <NavLink
                            exact 
                            to="/home"
                            > <span>Tix</span>Movie
                    </NavLink>
                </div>
                <ul className="sign">
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
    )
}
