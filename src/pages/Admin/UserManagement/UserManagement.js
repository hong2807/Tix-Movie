import React from 'react'
import './UserManagement.scss'
import HeaderUserAdmin from '../../../components/Admin/HeaderUserAdmin/HeaderUserAdmin';
import TableUserAdmin from '../../../components/Admin/TableUserAdmin/TableUserAdmin';
import { Redirect } from 'react-router-dom'
import { setPreloader } from "../../../redux/actions/PreloaderAction";
import { useDispatch } from "react-redux";
import { TIME_SHOW_PRELOADER } from "../../../redux/constants/PreloaderConstant";
import { useEffect } from 'react';

export default function UserManagement() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPreloader(true));
        setTimeout(() => dispatch(setPreloader(false)), TIME_SHOW_PRELOADER);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (localStorage.getItem('token') && localStorage.getItem('maLoaiNguoiDung') === "QuanTri") {
        return (
            <div className="usermanagement-component">
                <div className="container-fluid">
                <div className="usermanagement__content">
                        <HeaderUserAdmin/>
                        <TableUserAdmin/>
                    </div>
                </div>  
            </div>  
        )
    }
    return (
        <Redirect to='/' />
    )
}
