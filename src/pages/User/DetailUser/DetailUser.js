import React, { useEffect } from 'react'
import './DetailUser.scss'
import { Tabs } from 'antd';
import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import UserApi from '../../../api/services/UserApi';
import { editInfoUserAction, getInfoUserAction } from '../../../redux/actions/UserManagementAction';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";
import { Redirect } from 'react-router-dom';
import { setPreloader } from "../../../redux/actions/PreloaderAction";
import { TIME_SHOW_PRELOADER } from "../../../redux/constants/PreloaderConstant";

export default function DetailUser() {
    const dispatch = useDispatch();

    const bookingHistory = useSelector(state => state.UserManagementReducer.thongTinUser.thongTinDatVe);

    // Set initial value of form
    const valueform = useSelector(state => state.UserManagementReducer.thongTinUser);
    
    useEffect(() => {
        const data = {
            taiKhoan: localStorage.getItem("userName"),
        };

        UserApi.userInfo(data)
            .then((response) => {
                dispatch(getInfoUserAction(response.data));
            })
            .catch((error) => {
                console.log("error");
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Ant Design
    const { TabPane } = Tabs;
    function callback(key) {
    console.log(key);
    }

    // Form
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    // Yup
    const DetailUserSchema = Yup.object().shape({
        taiKhoan: Yup.string().required('Đây là trường bắt buộc'),
        matKhau: Yup.string().required('Đây là trường bắt buộc'),
        hoTen: Yup.string().required('Đây là trường bắt buộc'),
        email: Yup.string().required('Đây là trường bắt buộc').email('Email không hợp lệ'),
        soDT: Yup.string().required('Đây là trường bắt buộc').matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ')
    });

    // Formik
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDT: '',
            maLoaiNguoiDung: 'KhachHang',
            maNhom: 'GP01'
        },
        validationSchema: DetailUserSchema,
        onSubmit: (values) => {
            values['maLoaiNguoiDung'] = 'KhachHang';
            // values.maLoaiNguoiDung = 'KhachHang';
            UserApi.editUserInfo(values).then(response => {
                response.data.thongTinDatVe = bookingHistory;
                dispatch(editInfoUserAction(response.data));
                Swal.fire({
                    title: 'Bạn đã cập nhật thành công',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                  })
            }).catch(error => {
                Swal.fire({
                    title: 'Cập nhật thất bại',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Thử lại',
                })
            })
        },
    });

    useEffect(() => {
        dispatch(setPreloader(true));
        setTimeout(() => dispatch(setPreloader(false)), TIME_SHOW_PRELOADER);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect( () => {
        formik.setValues(valueform);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[valueform])


    const renderTransaction = () => {
        return Array.isArray(bookingHistory) && bookingHistory.map((item,index) => {
            return <div className="detailuser__history-item mb-5" key={index}>
            <div className="row">
                {/* <div className="col-12 col-md-2">
                    <div>
                        <img style={{width: 100, height: 120}} src="/images/test.png" alt=""></img>
                    </div>
                </div> */}
                <div className="col-12 col-md-12">
                <div>
                    <p className="name-film">Phim {item.tenPhim}</p>
                    {item.danhSachGhe.map((value,index) => {
                        return <div key={index}>
                        <p>{value.tenHeThongRap} - L3-Bitexco Icon 68, 2 Hải Triều, Quận 1</p>
                        <p>Ngày đặt: 11.10.2020 - {value.tenRap} - Ghế {value.tenGhe}</p>
                    </div>
                    })}
                </div>
            </div>
            </div>
        </div>
        })
    }


    if (localStorage.getItem('token')) {
        return (
            <div className="detailuser-component component-padding">
                <div className="container">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Thông tin cá nhân" key="1">
                    <div className="detailuser__info">
                        <div className="detailuser__info-content">
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
                                <Form.Item label="Họ tên" >
                                    <Input type="text"  
                                    name="hoTen" 
                                    className="form-control"  
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.hoTen}/>
                                    {formik.errors.hoTen && formik.touched.hoTen && <small className="text-danger">{formik.errors.hoTen}</small>}
                                </Form.Item>
                                <Form.Item label="Tài khoản" >
                                    <Input type="text" 
                                        disabled
                                        name="taiKhoan"
                                        onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.taiKhoan}/>
                                            {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger disabled">{formik.errors.taiKhoan}</small>}
                                </Form.Item>
                                <Form.Item label="Email" >
                                    <Input type="text"   
                                    name="email" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}/>
                                    {formik.errors.email && formik.touched.email && <small className="text-danger">{formik.errors.email}</small>}
                                </Form.Item>
                                <Form.Item label="Mật khẩu" >
                                    <Input type="text"  
                                    name="matKhau"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.matKhau}/>
                                    {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                                </Form.Item>
                                <Form.Item label="Số điện thoại" >
                                    <Input type="text"  
                                    name="soDT" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.soDT}/>
                                    {formik.errors.soDT && formik.touched.soDT && <small className="text-danger">{formik.errors.soDT}</small>}
                                </Form.Item>
                                
                                
                                <Form.Item className="form-btn">
                                    <Button htmlType="submit" className="btn-update">Cập nhật</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    </TabPane>
                    <TabPane tab="Lịch sử đặt vé" key="2">
                        <div className="detailuser__history">
                            <div className="detailuser__history-content">
                                {renderTransaction()}
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
                </div>
            </div>
        )
    }
    return (
        <Redirect to='/dangnhap' />
    )
}
