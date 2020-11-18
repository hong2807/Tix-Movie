import React from 'react'
import './Dashboard.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
    return (
        <div className="dashboard-component">
            <div className="dashboard__sidebar">
                <div className="dashboard__logo">
                    <NavLink
                            exact 
                            to="/home"
                            > <span>Tix</span>Movie
                    </NavLink>
                </div>

                <div className="dashboard__user">
                    <div className="sidebar__user-img">
                        <FontAwesomeIcon className="icon" icon={faUserCircle} />
			        </div>

                    <div className="sidebar-user-title">
                        <span>Admin</span>
                        <p className="mb-0">John Doe</p>
                    </div>

                    <div className="sidebar-user-btn">
                        <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    </div>
		        </div>

                <div className="dashboard__nav">
                    <ul>
                        <li class="sidebar-nav-item">
                            <a href="./">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                Phim
                            </a>
                        </li>
                        <li class="sidebar-nav-item">
                            <a href="./">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                Người dùng
                            </a>
                        </li>
                        <li class="sidebar-nav-item">
                            <a href="./">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
                                Nâng cấp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="dashboard__main">
                <div className="container-fluid">
                    <div className="dashboard__title">
                        <h3 style={{color: 'white'}}>User</h3>
                    </div>
                </div>
               
               <div className="dashboard__table">
                   <table class="table">
                       <thead>
                           <tr>
                               <th>Mã phim</th>
                               <th>Tên phim</th>
                               <th>Trailer</th>
                               <th>Hình ảnh</th>
                               <th>Mô tả</th>
                               <th>Mã nhóm</th>
                               <th>Ngày khởi chiếu</th>
                               <th>Đánh giá</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>01</td>
                               <td>Tiệc Trăng Máu</td>
                               <td>Trailer</td>
                               <td>Hình Ảnh</td>
                               <td>Trong buổi họp mặt của nhóm bạn thân, một thành viên bất ngờ đề xuất trò chơi chia sẻ điện thoại nhằm tăng tinh thần “đoàn kết”. Từ đó, những góc khuất của từng người dần hé lộ và khiến cho mối quan hệ vốn khắng khít của họ bắt đầu lay chuyển.</td>
                               <td>GP01</td>
                               <td>23.10.2020</td>
                               <td>7.8</td>
                           </tr>
                          
                       </tbody>
                   </table>
               </div>
            </div>
        </div>
    )
}


