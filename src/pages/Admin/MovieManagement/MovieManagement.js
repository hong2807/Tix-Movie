import React from 'react'
import './MovieManagement.scss'

import TableMovieAdmin from '../../../components/Admin/TableMovieAdmin/TableMovieAdmin';
import { Redirect } from 'react-router-dom'
import HeaderFilmAdmin from '../../../components/Admin/HeaderFilmAdmin/HeaderFilmAdmin';
import { setPreloader } from "../../../redux/actions/PreloaderAction";
import { useDispatch } from "react-redux";
import { TIME_SHOW_PRELOADER } from "../../../redux/constants/PreloaderConstant";
import { useEffect } from 'react';

export default function MovieManagement() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPreloader(true));
        setTimeout(() => dispatch(setPreloader(false)), TIME_SHOW_PRELOADER);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (localStorage.getItem('token') && localStorage.getItem('maLoaiNguoiDung') === "QuanTri") {
        return (
            <div className="moviemanagement-component">
                <div className="container-fluid">
                <div className="moviemanagement__content">
                        <HeaderFilmAdmin/>
                        <TableMovieAdmin/>       
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Redirect to='/' />
    )
}
