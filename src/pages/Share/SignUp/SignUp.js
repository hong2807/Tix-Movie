import React from 'react'
import './SignUp.scss'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2"; 
import UserApi from '../../../api/services/UserApi';

export default function SignUp(props) {
    // Yup
    const SignupSchema = Yup.object().shape({
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
            maLoaiNguoiDung: 'KhachHang',
            maNhom: 'GP01'
        },
        validationSchema: SignupSchema,
        onSubmit: (values, {resetForm}) => {
            UserApi.createUser(values).then(response => {
                Swal.fire({
                    title: 'Bạn đã tạo tài khoản thành công',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Đến trang đăng nhập',
                    cancelButtonText: 'Ở lại'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        return props.history.push('/dangnhap')
                    } else {
                        resetForm({values: ''});
                    }
                })
            }).catch(error => {
                Swal.fire({
                    title: 'Tạo tài khoản không thành công',
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Thử lại',
                })
            })
        },
    });

    
    return (
        <div className="signup-component">
            <div className="sign__content">
            <div className="logo text-center">
                <NavLink exact to="/"> 
                    <span>Tix</span>Movie
                </NavLink>
            </div>
           
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-left">
                            <h2>Thông tin đăng nhập</h2>
                            <div className="sign__group">
                                <label>Tên tài khoản</label>
                                <input type="text" 
                                name="taiKhoan" 
                                className="form-control"  
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.taiKhoan}/>
                                {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger">{formik.errors.taiKhoan}</small>}
                            </div>
                            <div className="sign__group">
                                <label>Mật khẩu</label>
                                <input type="password" 
                                name="matKhau" 
                                className="form-control" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.matKhau}/>
                                {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-right">
                            <h2>Thông tin cá nhân</h2>
                            <div className="sign__group">
                                <label>Họ tên</label>
                                <input type="text" 
                                name="hoTen" 
                                className="form-control"  
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.hoTen}/>
                                 {formik.errors.hoTen && formik.touched.hoTen && <small className="text-danger">{formik.errors.hoTen}</small>}
                            </div>
                            <div className="sign__group">
                                <label>Email</label>
                                <input type="email" 
                                name="email" 
                                className="form-control" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}/>
                                {formik.errors.email && formik.touched.email && <small className="text-danger">{formik.errors.email}</small>}
                            </div>
                            <div className="sign__group">
                                <label>Số điện thoại</label>
                                <input type="text" 
                                name="soDt" 
                                className="form-control" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.soDt}/>
                                 {formik.errors.soDt && formik.touched.soDt && <small className="text-danger">{formik.errors.soDt}</small>}
                            </div>
                        </div>
                    </div>
                </div>
                
               
                <button type="submit" className="btn btn-submit">
                    Đăng ký
                </button>
                <p className="text-center sign__text">Bạn đã có tài khoản chưa? 
                    <span> 
                        <NavLink exact to="/dangnhap"> 
                        &nbsp;Đăng nhập!
                        </NavLink>
                    </span>
                </p>
            </form>
        </div>
        </div>
    )
}
