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
import Swal from "sweetalert2";  


export default function UserManagement() {
    // Form
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

   //Modal add new
   const [visibleadd, setVisibleadd] = React.useState(false);
//    const [confirmLoadingadd, setConfirmLoadingadd] = React.useState(false);
//    const [modalTextadd, setModalTextadd] = React.useState('Content of the modal');
 
   const addNewUser = () => {
     setVisibleadd(true);
   };
 
 
   const addCancel = () => {
     console.log('Clicked cancel button');
     setVisibleadd(false);
   };

    //Modal edit
    const [visible, setVisible] = React.useState(false);
    // const [confirmLoading, setConfirmLoading] = React.useState(false);
    // const [modalText, setModalText] = React.useState('Content of the modal');
  
    const showModal = () => {
      setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
      };
   



    // Modal delete
    const HandleClick = () => {   
        Swal.fire({
            title: 'Xóa Thành Viên',
            text: "Bạn có chắc chắn xóa thành viên này không ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Có!',
            cancelButtonText: 'Không'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Đã Xóa!',
                'Thành viên này đã được xóa.',
                'success'
              )
            }
          })
    }
    return (
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

                            <button className="add" onClick={addNewUser}>
                                <FontAwesomeIcon className="icon mr-2" icon={faPlus} />
                                Thêm thành viên
                            </button>
                        </div>
                    </div>
                
                    <div className="usermanagement__table mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tài khoản</th>
                                    <th>Họ Tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Mã loại người dùng</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit}/>
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit}/>
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>honghuynh</td>
                                    <td>Huỳnh Thị Tuyết Hồng</td>
                                    <td>honghuynh2807@gmial.com</td>
                                    <td>0796280793</td>
                                    <td>Khách hàng</td>
                                    <td className="group-icon">
                                        <button className="icon-edit icon-bg" onClick={showModal}>
                                            <FontAwesomeIcon className="icon" icon={faEdit} />
                                        </button>
                                        <button className="icon-delete icon-bg" onClick={HandleClick}>
                                            <FontAwesomeIcon className="icon" icon={faTrashAlt} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="usermanagement__pagination">
						<span>10 from 3 702</span>

						<ul className="paginator">
							<li className="paginator__item paginator__item--prev">
								<a href="./">
                                    <FontAwesomeIcon className="icon" icon={faAngleLeft} />
                                </a>
							</li>
							<li className="paginator__item active"><a href="./">1</a></li>
							<li className="paginator__item"><a href="./">2</a></li>
							<li className="paginator__item"><a href="./">3</a></li>
							<li className="paginator__item"><a href="./">4</a></li>
							<li className="paginator__item paginator__item--next">
								<button>
                                    <FontAwesomeIcon className="icon" icon={faAngleRight} />
                                </button>
							</li>
						</ul>
					</div>
                </div>
            </div>
            
            <Modal
                title=""
                visible={visible}
                // onOk={handleOk}
                // confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="editUserModal__title">
                    <div className="editUserModal__user">
                        <div className="editUserModal__avatar">
                            <FontAwesomeIcon className="icon" icon={faUserCircle} />
                        </div>
                        <div className="editUserModal__text">
                            <p className="mb-0">honghuynh</p>
                        </div>
                    </div>
                    <div className="editUserModal__action">
                        <button className="btn btn-delete">Xóa thành viên</button>
                    </div>
                </div>

                <div className="editUserModal__details">
                    <div className="row">
                        <div className="col-6">
                            <div className="editUserModal__details-left">
                                <h5 className="title">Chi tiết thành viên</h5>
                                <Form
                                    className="editUserModal__form"
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
                            <div className="editUserModal__details-right">
                                <h5 className="title">Thay đổi mật khẩu</h5>
                                <Form
                                    className="editUserModal__form"
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
                   
            <Modal
                title=""
                visible={visibleadd}
                // onOk={addOk}
                // confirmLoading={confirmLoadingadd}
                onCancel={addCancel}
                footer={null}
            >
                <div className="addUserModal__title">
                    <h4 className="title">Thêm Thành Viên</h4>
                </div>

                <div className="addUserModal__details">
                    <div className="addUserModal__details-content">
                        <Form
                            className="addUserModal__form"
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
                            <Form.Item className="form-btn">
                                <Button className="btn-update">Thêm</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </div>  
    )
}
