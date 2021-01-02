import React from "react";
import "./TableMovieAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useState } from "react";
import Pagination from "react-bootstrap-4-pagination";
import AdminFilmApi from "../../../api/services/AdminFilmApi";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFilmAdminAction, getListFilmAdminAction } from "../../../redux/actions/AdminFilmManagementAction";
import { useEffect } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import CinemaApi from "../../../api/services/CinemaApi";

export default function TableMovieAdmin() {
    const moment = require("moment");

    const dispatch = useDispatch();

    //Modal edit
    const [visible, setVisible] = React.useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };

    //Modal create film calendar
    const [visibleCreate, setVisibleCreate] = React.useState(false);
    const showModalCreate = () => {
        setVisibleCreate(true);
    };
    const handleCancelCreate = () => {
        setVisibleCreate(false);
    };

    
    // Pagination BS4
    let paginationConfig = {
        totalPages: listMovie.totalPages,
        currentPage: listMovie.currentPage,
        showMax: 5,
        size: "md",
        threeDots: false,
        prevNext: true,
        onClick: function (page) {
            console.log(page);
            AdminFilmApi.listFilm(page, 20)
                .then((response) => {
                    dispatch(getListFilmAdminAction(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    };

    // Yup
    const TableMovieAdminSchema = Yup.object().shape({
        maPhim: Yup.string().required("Đây là trường bắt buộc"),
        tenPhim: Yup.string().required("Đây là trường bắt buộc"),
        biDanh: Yup.string().required("Đây là trường bắt buộc"),
        trailer: Yup.string().required("Đây là trường bắt buộc"),
        // hinhAnh: Yup.string().required("Đây là trường bắt buộc"),
        moTa: Yup.string().required("Đây là trường bắt buộc"),
        ngayKhoiChieu: Yup.string().required("Đây là trường bắt buộc"),
        danhGia: Yup.string().required("Đây là trường bắt buộc"),
    });

    // Yup
    const filmScheduleSchema = Yup.object().shape({
        ngayChieuGioChieu: Yup.string().required("Đây là trường bắt buộc"),
        giaVe: Yup.number().min(10000, "Giá vé tói thiểu 10.000").required("Đây là trường bắt buộc"),
    });

    // Formik
    const formik = useFormik({
        initialValues: {
            maPhim: 0,
            tenPhim: "string",
            biDanh: "string",
            trailer: "string",
            hinhAnh: "string",
            moTa: "string",
            maNhom: "GP01",
            ngayKhoiChieu: "string",
            danhGia: 0,
        },
        validationSchema: TableMovieAdminSchema,
        onSubmit: (values) => {
            values.ngayKhoiChieu = moment(values.ngayKhoiChieu).format("DD/MM/yyyy");
            AdminFilmApi.updateFilm(values)
                .then((response) => {
                    if (fileImageUpload) {
                        //Upload Hinh
                        const formData = new FormData();
                        formData.append("File", fileImageUpload.originFileObj, fileImageUpload.name);
                        formData.append("tenPhim", response.data.tenPhim);
                        formData.append("maNhom", "GP01");

                        AdminFilmApi.updateImageFilm(formData)
                            .then((response) => {
                                Swal.fire({
                                    title: "Bạn đã cập nhật thành công",
                                    icon: "success",
                                    confirmButtonColor: "#3085d6",
                                });
                                loadListMovie();
                            })
                            .catch((error) => {
                                Swal.fire({
                                    title: "Cập nhật hình thất bại",
                                    icon: "error",
                                    confirmButtonColor: "#3085d6",
                                    confirmButtonText: "Thử lại",
                                });
                            });
                    } else {
                        Swal.fire({
                            title: "Bạn đã cập nhật thành công",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                        });
                        loadListMovie();
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Cập nhật thất bại",
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Thử lại",
                    });
                });
        },
    });

    // Formik
    const filmScheduleFormik = useFormik({
        initialValues: {
            maPhim: 0,
            ngayChieuGioChieu: "",
            maRap: 0,
            giaVe: 0,
        },
        validationSchema: filmScheduleSchema,
        onSubmit: (values) => {
            const data = values;
            data.ngayChieuGioChieu = moment(data.ngayChieuGioChieu).format("DD/MM/yyyy hh:mm:ss");
            data.maPhim = valueform.maPhim;
            AdminFilmApi.createScheduleFilm(data)
                .then((response) => {
                    Swal.fire({
                        title: "Bạn đã tạo lich chiếu thành công",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Tạo lich chiếu thất bại",
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Thử lại",
                    });
                });
        },
    });

    const listMovie = useSelector((state) => state.AdminFilmManagementReducer.danhSachFilmAdmin);
    const valueform = useSelector((state) => state.AdminFilmManagementReducer.chiTietFilmAdmin);
    const [cinemaList, setCinemaList] = useState([]);
    const [selectedActive, setSelectedActive] = useState("BHDStar");
    const [cinemaDetailList, setCinemaDetailList] = useState([]);
    const [cinemaRoomDetailList, setCinemaRoomDetailList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [fileImageUpload, setFileImageUpload] = useState(null);

    useEffect(() => {
        loadListMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        formik.setValues(valueform);
        // when have valueform, set initial img of Modal Edit Film
        setImageUrl(valueform.hinhAnh);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueform]);

    useEffect(() => {
        CinemaApi.getCinemaList()
            .then((response) => {
                setCinemaList(response.data);
            })
            .catch((error) => {
                console.log("error", error.response.data);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        CinemaApi.getCinemaDetailAndRoomList(selectedActive)
            .then((response) => {
                console.log("getCinemaDetailAndRoomListresponse", response.data);
                setCinemaDetailList(response.data);
                setCinemaRoomDetailList(response.data[0].danhSachRap);
            })
            .catch((error) => {
                console.log("error", error.response.data);
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadListMovie = () => {
        AdminFilmApi.listFilm(1, 20)
            .then((response) => {
                dispatch(getListFilmAdminAction(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderCinemaList = () => {
        return cinemaList.map((item, index) => {
            return (
                <option key={index} value={item.maHeThongRap}>
                    {item.tenHeThongRap}
                </option>
            );
        });
    };

    const renderCinemaDetailList = () => {
        return cinemaDetailList.map((item, index) => {
            return (
                <option key={index} value={item.maCumRap}>
                    {item.tenCumRap}
                </option>
            );
        });
    };

    const renderRoomCinemaDetailList = () => {
        return cinemaRoomDetailList.map((item, index) => {
            return (
                <option key={index} value={item.maRap}>
                    {item.tenRap}
                </option>
            );
        });
    };

    const handleChangeCinemaList = (event) => {
        setSelectedActive(event.target.value);
        const cinema = event.target.value;
        console.log("cinema", cinema);
        CinemaApi.getCinemaDetailAndRoomList(cinema)
            .then((response) => {
                console.log("getCinemaDetailAndRoomListresponse", response.data);
                setCinemaDetailList(response.data);
                setCinemaRoomDetailList(response.data[0].danhSachRap);
            })
            .catch((error) => {
                console.log("error", error.response.data);
            });
    };

    const handleChangeCinemaDetailList = (event) => {
        const cinemaDetail = event.target.value;
        const cinemaDetailActive = cinemaDetailList.filter((item) => {
            return item.maCumRap === cinemaDetail;
        })[0];
        setCinemaRoomDetailList(cinemaDetailActive.danhSachRap);
    };

    const renderListMovie = () => {
        return (
            Array.isArray(listMovie.items) &&
            listMovie.items.map((item, index) => {
                return (
                    <tr key={index} onClick={() => dispatch(getDetailFilmAdminAction(item))}>
                        <td className="table-img">
                            <img src={item.hinhAnh} alt="" />
                        </td>
                        <td>{item.maPhim}</td>
                        <td>{item.tenPhim}</td>
                        <td>{moment(item.ngayKhoiChieu).format("DD/MM/yyyy")}</td>
                        <td>{item.danhGia}</td>
                        <td className="group-icon">
                            <button className="icon-create icon-bg" onClick={showModalCreate}>
                                <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
                            </button>
                            <button className="icon-edit icon-bg" onClick={showModal}>
                                <FontAwesomeIcon className="icon" icon={faEdit} />
                            </button>
                            <button className="icon-delete icon-bg">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faTrashAlt}
                                    onClick={() => {
                                        deleteFilm(item.maPhim);
                                    }}
                                />
                            </button>
                        </td>
                    </tr>
                );
            })
        );
    };

    // Ant upload image
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        return isJpgOrPng && isLt2M;
    };

    

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Chọn hình ảnh</div>
        </div>
    );

    const handleChange = (info) => {
        info.file && setFileImageUpload(info.file);
        setLoading(true);

        getBase64(info.file.originFileObj, (imageUrl) => {
            setTimeout(() => {
                setLoading(false);
                setImageUrl(imageUrl);
            }, 1000);
        });
    };

    const deleteFilm = (id) => {
        Swal.fire({
            title: "Xóa Phim",
            text: "Bạn có chắc chắn xóa phim này không ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Có!",
            cancelButtonText: "Không",
        }).then((result) => {
            if (result.isConfirmed) {
                AdminFilmApi.deleteFilm(id)
                    .then((response) => {
                        loadListMovie();
                        Swal.fire("Đã Xóa!", "Phim này đã được xóa.", "success");
                    })
                    .catch((error) => {
                        console.log("deleteFilm", error.response.data);
                        Swal.fire({
                            title: error.response.data,
                            icon: "error",
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Thử lại",
                        });
                    });
            }
        });
    };

    return (
        <div className="moviemanagement__table mt-3">
            <table class="table">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Mã phim</th>
                        <th>Tên phim</th>
                        <th>Ngày khởi chiếu</th>
                        <th>Đánh giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>{renderListMovie()}</tbody>
            </table>
            <div className="moviemanagement__pagination">
                <Pagination {...paginationConfig} className="test" />
            </div>

            <Modal className="modal-edit-movie" title="" visible={visible} onCancel={handleCancel} footer={null}>
                <div className="editMovieModal__details">
                    <div className="row">
                        <div className="col-4">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                            </Upload>
                        </div>
                        <div className="col-8">
                            <div className="editMovieModal__details-right">
                                <form className="editMovieModal__form" onSubmit={formik.handleSubmit}>
                                    <div className="form__item">
                                        <label>Mã Phim</label>
                                        <input disabled type="text" name="maPhim" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.maPhim} />
                                        {formik.errors.maPhim && formik.touched.maPhim && <small className="text-danger">{formik.errors.maPhim}</small>}
                                    </div>
                                    <div className="form__item">
                                        <label>Tên phim</label>
                                        <input type="text" name="tenPhim" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tenPhim} />
                                        {formik.errors.tenPhim && formik.touched.tenPhim && <small className="text-danger">{formik.errors.tenPhim}</small>}
                                    </div>
                                    <div className="form__item">
                                        <label>Trailer</label>
                                        <input type="text" name="trailer" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.trailer} />
                                        {formik.errors.trailer && formik.touched.trailer && <small className="text-danger">{formik.errors.trailer}</small>}
                                    </div>
                                    <div className="form__item">
                                        <label>Description</label>
                                        <textarea rows="3" name="moTa" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.moTa} />
                                        {formik.errors.moTa && formik.touched.moTa && <small className="text-danger">{formik.errors.moTa}</small>}
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form__item">
                                                <label>Ngày Chiếu</label>
                                                <input
                                                    className="form-control"
                                                    type="date"
                                                    name="ngayKhoiChieu"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={moment(formik.values.ngayKhoiChieu).format("YYYY-MM-DD")}
                                                />
                                                {formik.errors.ngayKhoiChieu && formik.touched.ngayKhoiChieu && <small className="text-danger">{formik.errors.ngayKhoiChieu}</small>}
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form__item">
                                                <label>Đánh giá</label>
                                                <input type="number" name="danhGia" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.danhGia} />
                                                {formik.errors.danhGia && formik.touched.danhGia && <small className="text-danger">{formik.errors.danhGia}</small>}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-update">
                                        Cập nhật
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal className="modal-create-movie" title="" visible={visibleCreate} onCancel={handleCancelCreate} footer={null}>
                <div className="createMovieModal__title">
                    <div className="createMovieModal__user">
                        <div className="createMovieModal__text">
                            <h3>LỊCH CHIẾU PHIM </h3>
                        </div>
                    </div>
                </div>

                <div className="createMovieModal__details">
                    <form onSubmit={filmScheduleFormik.handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <label>Chọn hệ thống rạp</label>
                                <select onChange={handleChangeCinemaList}>{renderCinemaList()}</select>
                                <label>Chọn cụm rạp</label>
                                <select onChange={handleChangeCinemaDetailList}>{renderCinemaDetailList()}</select>
                                <label>Chọn rạp</label>
                                <select name="maRap" value={filmScheduleFormik.values.maRap} onChange={filmScheduleFormik.handleChange} onBlur={filmScheduleFormik.handleBlur}>
                                    {renderRoomCinemaDetailList()}
                                </select>
                            </div>
                            <div className="col-6">
                                <div className="createMovieModal__details-right">
                                    <div className="form__item">
                                        <label>Ngày Giờ Chiếu</label>
                                        <input
                                            className="form-control"
                                            type="datetime-local"
                                            name="ngayChieuGioChieu"
                                            onChange={filmScheduleFormik.handleChange}
                                            onBlur={filmScheduleFormik.handleBlur}
                                            // value={moment(filmScheduleFormik.values.ngayChieuGioChieu).format("YYYY-MM-DD hh:mm:ss")}
                                        />
                                        {filmScheduleFormik.errors.ngayChieuGioChieu && filmScheduleFormik.touched.ngayChieuGioChieu && (
                                            <small className="text-danger">{filmScheduleFormik.errors.ngayChieuGioChieu}</small>
                                        )}
                                    </div>
                                    <div className="form__item">
                                        <label>Giá vé</label>
                                        <input
                                            type="number"
                                            name="giaVe"
                                            className="form-control"
                                            onChange={filmScheduleFormik.handleChange}
                                            onBlur={filmScheduleFormik.handleBlur}
                                            value={filmScheduleFormik.values.giaVe}
                                        />
                                        {filmScheduleFormik.errors.giaVe && filmScheduleFormik.touched.giaVe && <small className="text-danger">{filmScheduleFormik.errors.giaVe}</small>}
                                    </div>

                                    <button type="submit" className="btn-update">
                                        Tạo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
