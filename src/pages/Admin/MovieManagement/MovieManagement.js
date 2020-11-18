import React from 'react'
import './MovieManagement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function MovieManagement() {
    return (
        <div className="moviemanagement-component">
            <div className="container-fluid">
             <div className="moviemanagement__content">
                    <div className="moviemanagement__title">
                        <h3 className="title mb-0">Phim</h3>
                        <a href="add-item.html" class="add">
                            Thêm phim
                        </a>
                    </div>
                
               
                    <div className="moviemanagement__table mt-3">
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
                                    <td>
                                        <a>
                                        <FontAwesomeIcon className="icon" icon={faPlusCircle} />
                                        </a>
                                        <a>
                                        <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </a>
                                        <a>
                                        <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
