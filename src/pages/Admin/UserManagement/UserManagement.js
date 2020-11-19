import React from 'react'
import './UserManagement.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faEdit, faPlus, faSearch, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {
    Form,
    Input,
    Button,
    Select,
    Modal
  } from 'antd';
import { useState } from 'react';

export default function UserManagement() {
    // Form
    const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
    //Modal
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };
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
        //                             <th>Thao tác</th>
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
                                    <h5 className="title">Chi tiết thành viên</h5>
                                    <Form
                                        className="profile__form"
                                        labelCol={{ span: 24 }}
                                        wrapperCol={{ span: 24 }}
                                        layout="vertical"
                                        initialValues={{ size: componentSize }}
                                        onValuesChange={onFormLayoutChange}
                                        size={componentSize}
                                    >
                                        
                                        <Form.Item label="Tài khoản" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Mật khẩu" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Họ tên" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Số điện thoại" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Email" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Mã loại người dùng">
                                            <Select defaultValue="Quản trị">
                                                <Select.Option className="option" value="quantri" selected>Quản trị</Select.Option>
                                                <Select.Option className="option" value="khachhang">Khách hàng</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Mã nhóm" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item className="form-btn">
                                            <Button className="btn-update">Cập nhật</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="profile__details-right">
                                    <h5 className="title">Thay đổi mật khẩu</h5>
                                    <Form
                                        className="profile__form"
                                        labelCol={{ span: 24 }}
                                        wrapperCol={{ span: 24 }}
                                        layout="vertical"
                                        initialValues={{ size: componentSize }}
                                        onValuesChange={onFormLayoutChange}
                                        size={componentSize}
                                    >
                                    

                                        <Form.Item label="Mật khẩu cũ" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Mật khẩu mới" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Nhập lại mật khẩu" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>

                                        <Form.Item className="form-btn">
                                            <Button className="btn-update">Thay đổi</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="icon-edit icon-bg" onClick={showModal}>
                                          <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </a>
                    {/* <Button type="primary" onClick={showModal}>
                        Click
                    </Button> */}
                    <Modal
                        title=""
                        visible={visible}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                        footer={null}
                    >
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
                                    <h5 className="title">Chi tiết thành viên</h5>
                                    <Form
                                        className="profile__form"
                                        labelCol={{ span: 24 }}
                                        wrapperCol={{ span: 24 }}
                                        layout="vertical"
                                        initialValues={{ size: componentSize }}
                                        onValuesChange={onFormLayoutChange}
                                        size={componentSize}
                                    >
                                        
                                        <Form.Item label="Tài khoản" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Mật khẩu" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Họ tên" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Số điện thoại" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Email" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Mã loại người dùng">
                                            <Select defaultValue="Quản trị">
                                                <Select.Option className="option" value="quantri" selected>Quản trị</Select.Option>
                                                <Select.Option className="option" value="khachhang">Khách hàng</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Mã nhóm" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item className="form-btn">
                                            <Button className="btn-update">Cập nhật</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="profile__details-right">
                                    <h5 className="title">Thay đổi mật khẩu</h5>
                                    <Form
                                        className="profile__form"
                                        labelCol={{ span: 24 }}
                                        wrapperCol={{ span: 24 }}
                                        layout="vertical"
                                        initialValues={{ size: componentSize }}
                                        onValuesChange={onFormLayoutChange}
                                        size={componentSize}
                                    >
                                    

                                        <Form.Item label="Mật khẩu cũ" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Mật khẩu mới" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>
                                        <Form.Item label="Nhập lại mật khẩu" >
                                            <Input type="text" placeholder="User 123" />
                                        </Form.Item>

                                        <Form.Item className="form-btn">
                                            <Button className="btn-update">Thay đổi</Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}
