import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const clearLocalstorage = () => {
    console.log('clearLocalstorage');
    localStorage.removeItem('userName');
    localStorage.removeItem('maLoaiNguoiDung');
    localStorage.removeItem('token');
    props.history.replace('/dangnhap');
  }

  return (
    <div className="header-component">
      <div className="container">
        <div className="header__content ">
          <ul className="header__left">
            <li className="nav-item">
              <Link
                className="nav-text"
                to="films-component"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                LỊCH CHIẾU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-text"
                to="cinema-component"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                CỤM RẠP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-text"
                to="mobileapp-component"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                ỨNG DỤNG
              </Link>
            </li>
          </ul>
          <div className="header__logo animate__swing">
            <NavLink exact to="/home">
              
              <span>Tix</span>Movie
            </NavLink>
          </div>
          <div className="header__right">
            {localStorage.getItem('token') ? <div className="header__user">
              Xin chào,
              <div className="header__avatar">
                <FontAwesomeIcon className="icon" icon={faUserCircle} />
              </div>
              <div className="header__text">
                <NavLink className="nav-text" exact to="/nguoidung">
                  {localStorage.getItem('userName')}
                </NavLink>
              </div>
              <li className="signout" onClick={clearLocalstorage}>
                <p className="nav-text">
                  ĐĂNG XUẤT
                </p>
              </li>
            </div> :  <ul className="header__sign">
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
            </ul>}
            

           
          </div>
        </div>

        <div className="header__mobile d-none">
        <div className="phone">
        <div className="content">
          
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <li><a href="./">Lịch Chiếu</a></li>
              <li><a href="./">Cụm Rạp</a></li>
              <li><a href="./">Ứng Dụng</a></li>
              <li><a href="./">Đăng nhập</a></li>
              <li><a href="./">Đăng ký</a></li>
            </ul>
           </div>
          </nav>
        </div>
       </div>
        </div>
      </div>
    </div>
  );
}
