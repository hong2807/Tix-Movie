import React from "react";
import "./TableMovieAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "antd";
import { useState } from "react";
import Pagination from "react-bootstrap-4-pagination";
import AdminFilmApi from "../../../api/services/AdminFilmApi";
import { useDispatch, useSelector } from "react-redux";
import { getListFilmAdminAction } from "../../../redux/actions/AdminFilmManagementAction";
import { useEffect } from "react";

export default function TableMovieAdmin() {
  //Modal edit
  const [visible, setVisible] = React.useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const dispatch = useDispatch();

  const listMovie = useSelector((state) => state.AdminFilmManagementReducer.danhSachFilmAdmin);
  

  const loadListMovie = () => {
    AdminFilmApi.listFilm(1, 20)
      .then((response) => {
        console.log("listFilm", response.data);
        dispatch(getListFilmAdminAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        console.log("listFilm", response.data);
        dispatch(getListFilmAdminAction(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
      
    },
  };

  useEffect( () => {
    loadListMovie();
  },[])

  const renderListMovie = () => {
    return Array.isArray(listMovie.items) && listMovie.items.map((item,index) => {
      return <tr key={index}>
      <td className="table-img">
        <img src="/images/slider4.jpg" alt="" />
      </td>
      <td>{item.maPhim}</td>
      <td>{item.tenPhim}</td>
      <td>{item.ngayKhoiChieu}</td>
      <td>{item.danhGia}</td>
      <td className="group-icon">
        <button className="icon-edit icon-bg" onClick={showModal}>
          <FontAwesomeIcon className="icon" icon={faEdit} />
        </button>
        <button className="icon-delete icon-bg">
          <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        </button>
      </td>
    </tr>
    })
  }

  return (
    <div className="moviemanagement__table mt-3">
      <table class="table">
        <thead>
          <tr>
            <th></th>
            <th>Mã phim</th>
            <th>Tên phim</th>
            <th>Ngày khởi chiếu</th>
            <th>Đánh giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {renderListMovie()}
        </tbody>
      </table>
      <div className="moviemanagement__pagination">
        <Pagination {...paginationConfig} className="test" />
      </div>

      <Modal
        title=""
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="editMovieModal__title">
          <div className="editMovieModal__user">
            <div className="editMovieModal__avatar">
              <FontAwesomeIcon className="icon" icon={faUserCircle} />
            </div>
            <div className="editMovieModal__text">
              <p className="mb-0">honghuynh</p>
            </div>
          </div>
          <div className="editMovieModal__action">
            <button className="btn btn-delete">Xóa thành viên</button>
          </div>
        </div>

        <div className="editMovieModal__details">
          <div className="row">
                  <div className="col-4">
                  <div className="editMovieModal__details-left">
                      <div class="form-img">Chọn hình ảnh</div>
                  </div>
                  </div>
                  <div className="col-8">
                    <div className="editMovieModal__details-right">
                      <form className="editMovieModal__form">
                        <div className="form__item">
                          <label>Mã Phim</label>
                          <input type="text" name="matKhau"/>
                        </div>
                        <div className="form__item">
                          <label>Tên phim</label>
                          <input type="text"/>
                        </div>
                        <div className="form__item">
                          <label>Trailer</label>
                          <input type="text"/>
                        </div>
                        <div className="form__item">
                          <label>Description</label>
                          <textarea rows="3"></textarea>
                        </div>
                        <div className="form__item">
                          <label>Ngày Chiếu</label>
                          <input type="text"/>
                        </div>
                        <div className="form__item">
                          <label>Đánh giá</label>
                          <input type="text"/>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
        </div>
      </Modal>
    </div>
  );
}
