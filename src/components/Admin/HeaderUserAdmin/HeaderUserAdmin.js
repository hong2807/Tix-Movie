import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HeaderUserAdmin.scss";
import {   Modal } from 'antd';
import Swal from "sweetalert2";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AdminApi from "../../../api/services/AdminApi";
import { useDispatch, useSelector } from "react-redux";
import { createUserAdmin, getKindOfUserAction, getToTalListUserAdmin, setTuKhoa } from "../../../redux/actions/AdminUserManagementAction";
import { getListUserAdmin } from "../../../redux/actions/AdminUserManagementAction";
import { useEffect } from "react";
import { useRef } from "react";



export default function HeaderUserAdmin() {

    const dispatch = useDispatch();

    const dsMaLoaiNguoiDung = useSelector(state =>  state.AdminUserManagementReducer.maLoaiNguoiDung)

    let inputSearch = useRef(null);

    //Modal add new
    const [visibleadd, setVisibleadd] = React.useState(false);
    const addNewUser = () => {
        setVisibleadd(true);
    };
    const addCancel = () => {
        console.log('Clicked cancel button');
        setVisibleadd(false);
    };

    // Yup
    const HeaderUserAdminSchema = Yup.object().shape({
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
            // maLoaiNguoiDung: 'QuanTri',
            maNhom: 'GP01'
        },
        validationSchema: HeaderUserAdminSchema,
        onSubmit: (values, {resetForm}) => {
            AdminApi.createUser(values)
            .then(response => {
                dispatch(createUserAdmin(response.data));
                loadListUser();
                resetForm({values: ''});
                Swal.fire({
                    title: 'Bạn đã tạo tài khoản thành công',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                })
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


    useEffect( () => {
        AdminApi.listKindOfUser()
        .then(response => {
            dispatch(getKindOfUserAction(response.data))
        })
        .catch(error => {
            console.log('listKindOfUser', error.response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const loadListUser = () => {
        AdminApi.listUser(1,10)
        .then(response => {
            dispatch(getListUserAdmin(response.data.items));
        })
        .catch(error => {console.log(error)})
    }

    const loadListKindOfUser = () => { 
        return dsMaLoaiNguoiDung.map((item,index) => {
            return <option selected={item.maLoaiNguoiDung === formik.values.maLoaiNguoiDung} value={item.maLoaiNguoiDung} key={index}>{item.tenLoai}</option>
        })
    }

    const searchUser = () => {
        let valueInput = inputSearch.current.value;
        
        if(valueInput !== "") {
            AdminApi.searchUser(valueInput,1,10)
            .then(response => {
                dispatch(getListUserAdmin(response.data.items));
                dispatch(getToTalListUserAdmin(response.data));
                dispatch(setTuKhoa(valueInput))
            })
            .catch(error=> {
                console.log(error.response.data);
            })
        } else {
            AdminApi.listUser(1, 20)
                .then((response) => {
                    dispatch(getListUserAdmin(response.data.items));
                    dispatch(getToTalListUserAdmin(response.data));
                })
                .catch((errorr) => {
                    console.log("errorr list user pagination", errorr.response.data);
                });
        }
        
    }


    return (
        <div className="usermanagement__title">
            <h3 className="title mb-0">Thành Viên</h3>
            <div className="usermanagement__title-right">
                <div className="mr-3 search">
                <input type="text" 
                        placeholder="Tìm thành viên.." 
                        ref={inputSearch}
                        />
                    <FontAwesomeIcon className="icon" icon={faSearch} onClick={searchUser}/>
                </div>
                <button className="add" onClick={addNewUser}>
                    <FontAwesomeIcon className="icon mr-2" icon={faPlus} />
                    Thêm thành viên
                </button>
            </div>

            <Modal
                title=""
                visible={visibleadd}
                onCancel={addCancel}
                footer={null}
            >
                <div className="addUserModal__title">
                    <h4 className="title">Thêm Thành Viên</h4>
                </div>

                <div className="addUserModal__details">
                    <div className="addUserModal__details-content">
                        <form className="addUserModal__form" onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="form-left">
                                        <div className="form__item">
                                            <label>Họ tên</label>
                                            <input type="text" 
                                            name="hoTen" 
                                            className="form-control"  
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.hoTen}/>
                                            {formik.errors.hoTen && formik.touched.hoTen && <small className="text-danger">{formik.errors.hoTen}</small>}
                                        </div>
                                        <div className="form__item">
                                            <label>Email</label>
                                            <input type="email" 
                                            name="email" 
                                            className="form-control" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}/>
                                            {formik.errors.email && formik.touched.email && <small className="text-danger">{formik.errors.email}</small>}
                                        </div>
                                        <div className="form__item">
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
                                <div className="col-12 col-md-6">
                                    <div className="form-right">
                                        <div className="form__item">
                                            <label>Tài khoản</label>
                                            <input type="text" 
                                            name="taiKhoan" 
                                            className="form-control"  
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.taiKhoan}/>
                                            {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger">{formik.errors.taiKhoan}</small>}
                                        </div>
                                        <div className="form__item">
                                            <label>Mật khẩu</label>
                                            <input type="password" 
                                            name="matKhau" 
                                            className="form-control" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.matKhau}/>
                                            {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                                        </div>
                                        <div className="form__item">
                                            <label>Mã loại người dùng</label>
                                            <select class="form-control" 
                                                    name="maLoaiNguoiDung" 
                                                    value={formik.values.maLoaiNguoiDung} 
                                                    onChange={formik.handleChange} 
                                                    onBlur={formik.handleBlur}>
                                                {loadListKindOfUser()}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn-update">Thêm</button>
                        </form>
                    </div>
                </div>
            </Modal>
    </div>
  );
}
