import React from "react";
import "./SignIn.scss";
import { NavLink } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2"; 
import UserApi from "../../../api/services/UserApi";

export default function SignIn(props) {
  const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().required('Đây là trường bắt buộc'),
    matKhau: Yup.string().required('Đây là trường bắt buộc'),
  });

  const formik = useFormik({
    initialValues: {
        taiKhoan: '',
        matKhau: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
        console.log(values);
        UserApi.signIn(values).then(response => {
          console.log(response.data);
          localStorage.setItem('userName', response.data.taiKhoan);
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('maLoaiNguoiDung', response.data.maLoaiNguoiDung);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('hoTen', response.data.hoTen);
          localStorage.setItem('soDT', response.data.soDT);
          props.history.goBack();
        }).catch(error => {
          console.log('error',error.response.data);
          Swal.fire({
            title: error.response.data,
            icon: 'error',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Thử lại',
          })
        })
    },
  });


  return (
    <div className="signin-component">
      <div className="sign__content">
            <form onSubmit={formik.handleSubmit}>
                <div className="logo text-center">
                    <NavLink 
                            exact 
                            to="/home"
                            > <span>Tix</span>Movie
                    </NavLink>
                </div>
                <div className="sign__group">
                    <input type="text" 
                    name="taiKhoan"
                    className="form-control"  
                    placeholder="Tên tài khoản" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.taiKhoan}/>
                    {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger">{formik.errors.taiKhoan}</small>}
                </div>
                <div className="sign__group">
                    <input type="password" 
                    name="matKhau"
                    className="form-control" 
                    placeholder="Mật khẩu" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.matKhau}/>
                    {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                </div>

                <button type="submit" className="btn btn-submit">
                    Đăng nhập
                </button>
                <p className="text-center sign__text">Bạn chưa là thành viên? 
                  <span> 
                        <NavLink exact to="/dangky"> 
                             Đăng ký!
                        </NavLink>
                  </span>
                </p>
                <p className="text-center sign__text"><span>Quên mật khẩu?</span></p>
            </form>
        </div>
    </div>
  );
}
