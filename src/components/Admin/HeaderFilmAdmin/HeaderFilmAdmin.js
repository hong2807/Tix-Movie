import React from "react";
import "./HeaderFilmAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useState } from "react";
import AdminFilmApi from "../../../api/services/AdminFilmApi";
import { useDispatch, useSelector } from "react-redux";
import { getListFilmAdminAction } from "../../../redux/actions/AdminFilmManagementAction";
import { useEffect } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";


export default function HeaderFilmAdmin() {

    const moment = require("moment");

    const dispatch = useDispatch();

    const valueform = useSelector((state) => state.AdminFilmManagementReducer.chiTietFilmAdmin);


    //Modal edit
    const [visible, setVisible] = React.useState(false);
    const showModal = () => {
        setVisible(true);
    };
    const handleCancel = () => {
        setVisible(false);
    };


    // Yup
    const HeaderFilmAdminSchema = Yup.object().shape({
        tenPhim: Yup.string().required("Đây là trường bắt buộc"),
        // biDanh: Yup.string().required("Đây là trường bắt buộc"),
        trailer: Yup.string().required("Đây là trường bắt buộc"),
        moTa: Yup.string().required("Đây là trường bắt buộc"),
        ngayKhoiChieu: Yup.string().required("Đây là trường bắt buộc"),
        danhGia: Yup.string().required("Đây là trường bắt buộc"),
    });


    // Formik
    const formik = useFormik({
        initialValues: {
            tenPhim: "string",
            trailer: "string",
            moTa: "string",
            ngayKhoiChieu: "string",
            danhGia: 0,
        },
        validationSchema: HeaderFilmAdminSchema,
        onSubmit: (values) => {
            values.ngayKhoiChieu = moment(values.ngayKhoiChieu).format("DD/MM/yyyy");
            values.hinhAnh = 'https://google.com/mygod.jpg';
            values.maNhom = 'GP01';
            
            AdminFilmApi.createFilm(values)
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
                                    title: "Bạn đã tạo mới thành công",
                                    icon: "success",
                                    confirmButtonColor: "#3085d6",
                                });
                                loadListMovie();
                            })
                            .catch((error) => {
                                Swal.fire({
                                    title: "Tạo mới thất bại",
                                    icon: "error",
                                    confirmButtonColor: "#3085d6",
                                    confirmButtonText: "Thử lại",
                                });
                            });
                    } else {
                        Swal.fire({
                            title: "Bạn đã tạo mới thành công",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                        });
                        loadListMovie();
                    }
                })
                .catch((error) => {
                    Swal.fire({
                        title: "Tạo mới thất bại",
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Thử lại",
                    });
                });
        },
    });

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
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [fileImageUpload, setFileImageUpload] = useState(null);
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Chọn hình ảnh</div>
        </div>
    );
    const handleChange = (info) => {
        console.log("info", info);
        info.file && setFileImageUpload(info.file);
        setLoading(true);

        getBase64(info.file.originFileObj, (imageUrl) => {
            setTimeout(() => {
                setLoading(false);
                setImageUrl(imageUrl);
            }, 1000);
        });
    };


    useEffect(() => {
        formik.setValues(valueform);
        // when have valueform, set initial img of Modal Edit Film
        setImageUrl(valueform.hinhAnh);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueform]);



    const loadListMovie = () => {
        AdminFilmApi.listFilm(1, 20)
            .then((response) => {
                dispatch(getListFilmAdminAction(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
    
    
    return (
        <div className="moviemanagement__title">
            <h3 className="title mb-0">Phim</h3>
            <div className="moviemanagement__title-right" onClick={showModal}>
                <button className="add">
                    <FontAwesomeIcon className="icon mr-2" icon={faPlus} />
                    Thêm phim
                </button>
            </div>

            <Modal className="modal-add-movie" title="" visible={visible} onCancel={handleCancel} footer={null}>
                <div className="addFilmModal__title">
                    <h4 className="title">Thêm Phim</h4>
                </div>

                <div className="addMovieModal__details">
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
                            <div className="addMovieModal__details-right">
                                <form className="addMovieModal__form" onSubmit={formik.handleSubmit}>
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
                                        Thêm
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
