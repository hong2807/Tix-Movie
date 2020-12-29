import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HeaderUserAdmin.scss";
import {  Input, Button, Select, Form, Modal } from 'antd';
import { useState } from "react";
import Swal from "sweetalert2";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AdminApi from "../../../api/services/AdminApi";
import { useDispatch } from "react-redux";
import { createUserAdmin } from "../../../redux/actions/AdminUserManagementAction";
import { getListUserAdmin } from "../../../redux/actions/AdminUserManagementAction";



export default function HeaderUserAdmin() {
    const dispatch = useDispatch();

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

    const loadListUser = () => {
        AdminApi.listUser(1,10)
        .then(response => {
            console.log('response',response.data.items);
            dispatch(getListUserAdmin(response.data.items));
        })
        .catch(error => {console.log(error)})
    }


    // Yup
    const DetailUserSchema = Yup.object().shape({
        taiKhoan: Yup.string().required('Đây là trường bắt buộc'),
        matKhau: Yup.string().required('Đây là trường bắt buộc'),
        hoTen: Yup.string().required('Đây là trường bắt buộc'),
        email: Yup.string().required('Đây là trường bắt buộc').email('Email không hợp lệ'),
        soDt: Yup.string().required('Đây là trường bắt buộc').matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
    });

    // Formik
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: '',
            maLoaiNguoiDung: 'khachHang',
            maNhom: 'GP12'
        },
        validationSchema: DetailUserSchema,
        onSubmit: (values) => {
            console.log(values);
            AdminApi.createUser(values)
            .then(response => {
                console.log('createAccount',response.data);
                dispatch(createUserAdmin(response.data));
                Swal.fire({
                    title: 'Bạn đã tạo tài khoản thành công',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                })
                loadListUser();
            })
            .catch(error => {
                Swal.fire({
                    title: error.response.data,
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Thử lại',
                })
            })
        },
    });

    return (
        <div className="usermanagement__title">
            <h3 className="title mb-0">Thành Viên</h3>
            <div className="usermanagement__title-right">
            <div className="mr-3 search">
            <input type="text" placeholder="Tìm thành viên.." />
            <FontAwesomeIcon className="icon" icon={faSearch} />
            </div>

            <button className="add" onClick={addNewUser}>
            <FontAwesomeIcon className="icon mr-2" icon={faPlus} />
            Thêm thành viên
            </button>
        </div>

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
                            onFinish={formik.handleSubmit}
                        >
                            <Form.Item label="Họ tên">
                                    <Input type="text" 
                                    name="hoTen"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.hoTen}/>
                                    {formik.errors.hoTen && formik.touched.hoTen && <small className="text-danger">{formik.errors.hoTen}</small>}
                                
                            </Form.Item>
                            <Form.Item label="Tài khoản">
                                    <Input type="text" 
                                            name ="taiKhoan"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.taiKhoan}/>
                                            {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger disabled">{formik.errors.taiKhoan}</small>}
                            </Form.Item>
                          
                            <Form.Item label="Email">
                                    <Input type="text"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}/>
                                    {formik.errors.email && formik.touched.email && <small className="text-danger">{formik.errors.email}</small>}
                                
                            </Form.Item>
                            <Form.Item label="Mật khẩu">
                                    <Input 
                                    type="text"
                                    name="matKhau"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.matKhau}/>
                                    {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                            </Form.Item>
                           
                            <Form.Item label="Số điện thoại">
                                    <Input type="text"
                                    name="soDt"onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.soDT}/>
                                    {formik.errors.soDt && formik.touched.soDt && <small className="text-danger">{formik.errors.soDt}</small>}
                                    </Form.Item>
                            
                            <Form.Item label="Loại người dùng">
                                <Select defaultValue="Quản trị">
                                    <Select.Option className="option" value="quantri" selected>Quản trị</Select.Option>
                                    <Select.Option className="option" value="khachhang">Khách hàng</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item className="form-btn">
                                <Button htmlType="submit" className="btn-update">Thêm</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
    </div>
  );
}
