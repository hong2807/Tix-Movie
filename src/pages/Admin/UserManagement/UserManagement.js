import React from 'react'
import './UserManagement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faEdit, faPlus, faSearch, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function UserManagement() {
    return (
        // <div className="usermanagement-component">
        //     <div className="container-fluid">
        //      <div className="usermanagement__content">
        //             <div className="usermanagement__title">
        //                 <h3 className="title mb-0">Thành Viên</h3>
        //                 <div className="usermanagement__title-right">
        //                     <div className="mr-3 search">
        //                         <input type="text" placeholder="Tìm thành viên.."/>
        //                         <FontAwesomeIcon className="icon" icon={faSearch} />
        //                     </div>

        //                     <a href="add-item.html" class="add">
        //                         <FontAwesomeIcon className="icon mr-2" icon={faPlus} />
        //                         Thêm thành viên
        //                     </a>
        //                 </div>
        //             </div>
                
        //             <div className="usermanagement__table mt-3">
        //                 <table class="table">
        //                     <thead>
        //                         <tr>
        //                             <th>Tài khoản</th>
        //                             <th>Mật khẩu</th>
        //                             <th>Họ Tên</th>
        //                             <th>Số điện thoại</th>
        //                             <th>Mã loại người dùng</th>
        //                             <th>Mã nhóm</th>
        //                             <th>Email</th>
        //                             <th>Action</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                         <tr>
        //                             <td>honghuynh</td>
        //                             <td>123456</td>
        //                             <td>Huỳnh Thị Tuyết Hồng</td>
        //                             <td>0796280793</td>
        //                             <td>Khách hàng</td>
        //                             <td>GMN02</td>
        //                             <td>honghuynh2807@gmial.com</td>
        //                             <td className="group-icon">
        //                                 <a className="icon-edit icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faEdit} />
        //                                 </a>
        //                                 <a className="icon-delete icon-bg">
        //                                     <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        //                                 </a>
        //                             </td>
        //                         </tr>
        //                     </tbody>
        //                 </table>
        //             </div>

        //             <div class="usermanagement__pagination">
		// 				<span>10 from 3 702</span>

		// 				<ul class="paginator">
		// 					<li class="paginator__item paginator__item--prev">
		// 						<a href="#">
        //                             <FontAwesomeIcon className="icon" icon={faAngleLeft} />
        //                         </a>
		// 					</li>
		// 					<li class="paginator__item active"><a href="#">1</a></li>
		// 					<li class="paginator__item"><a href="#">2</a></li>
		// 					<li class="paginator__item"><a href="#">3</a></li>
		// 					<li class="paginator__item"><a href="#">4</a></li>
		// 					<li class="paginator__item paginator__item--next">
		// 						<a href="#">
        //                             <FontAwesomeIcon className="icon" icon={faAngleRight} />
        //                         </a>
		// 					</li>
		// 				</ul>
		// 			</div>
        //         </div>
        //     </div>
        // </div>
        <div className="usermanagement-component">
            <div className="container-fluid">
                <div className="usermanagement__content">
                    <div className="usermanagement__title">
                        <h3 className="title mb-0">Thành Viên</h3>
                        <div className="usermanagement__title-right">
                            <div className="mr-3 search">
                                <input type="text" placeholder="Tìm thành viên.."/>
                                <FontAwesomeIcon className="icon" icon={faSearch} />
                            </div>

                           <a href="add-item.html" class="add">
                               <FontAwesomeIcon className="icon mr-2" icon={faPlus} />
                                Thêm thành viên
                           </a>
                       </div>
                    </div>


                    <div className="profile__title">
                        <div className="profile__user">
							<div className="profile__avatar">
                                <FontAwesomeIcon className="icon" icon={faUserCircle} />
							</div>
					
							<div className="profile__text">
								<p className="mb-0">honghuynh</p>
							</div>
						</div>

                        <div className="profile__action">
                            <a className="btn btn-delete">Xóa thành viên</a>
                        </div>
                    </div>

                    <div className="profile__details">
                        <div className="row">
                            <div className="col-6">
                                <div className="profile__details-left">
                                    <form className="profile__form">
                                        <h5 className="title">Chi tiết thành viên</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Tài khoản</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div> 
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Mật khẩu</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Họ tên</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div> 
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Số điện thoại</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div> 
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Email</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div> 
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Mã loại người dùng</label>
                                                    <select className="form-control profile__select">
                                                        <option>Quản trị</option>
                                                        <option>Khách hàng</option>
                                                    </select>
                                                </div>
                                            </div> 
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Mã nhóm</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div> 
                                        </div>
                                        <button className="btn-update">Cập nhật</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="profile__details-right">
                                    <form className="profile__form">
                                        <h5 className="title">Thay đổi mật khẩu</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Mật khẩu cũ</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div> 
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Mật khẩu mới</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="profile__group">
                                                    <label className="profile__label" for="username">Nhập lại mật khẩu</label>
                                                    <input id="username" type="text" name="username" class="profile__input" placeholder="User 123"/>
                                                </div>
                                            </div> 
                                        </div>
                                        <button className="btn-change">Thay đổi</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
