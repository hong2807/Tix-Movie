import { faEdit, faTrashAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import AdminApi from "../../../api/services/AdminApi";
import { getDetailUserAdmin, getListUserAdmin, getToTalListUserAdmin } from "../../../redux/actions/AdminUserManagementAction";
import "./TableUserAdmin.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserApi from "../../../api/services/UserApi";
import { editInfoUserAction } from "../../../redux/actions/UserManagementAction";
import Pagination from "react-bootstrap-4-pagination";


export default function TableUserAdmin() {
  const dispatch = useDispatch();

  //Modal edit
  const [visible, setVisible] = React.useState(false);

  const listUser = useSelector((state) => state.AdminUserManagementReducer.danhSachUserAdmin);
  const totalListUser = useSelector((state) => state.AdminUserManagementReducer.sumDanhSachUserAdmin);
  const dsMaLoaiNguoiDung = useSelector((state) => state.AdminUserManagementReducer.maLoaiNguoiDung);
  const valueform = useSelector((state) => state.AdminUserManagementReducer.chiTietUserAdmin);
  const tukhoa = useSelector((state) => state.AdminUserManagementReducer.tuKhoa);

  // Yup
  const TableUserAdminSchema = Yup.object().shape({
    taiKhoan: Yup.string().required("Đây là trường bắt buộc"),
    matKhau: Yup.string().required("Đây là trường bắt buộc"),
    hoTen: Yup.string().required("Đây là trường bắt buộc"),
    email: Yup.string().required("Đây là trường bắt buộc").email("Email không hợp lệ"),
    soDt: Yup.string()
      .required("Đây là trường bắt buộc")
      .matches(/^[0-9]+$/, "Số điện thoại không hợp lệ"),
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "KhachHang",
      maNhom: "GP01",
    },
    validationSchema: TableUserAdminSchema,
    onSubmit: (values) => {
      values["soDT"] = values.soDt;
      values["maNhom"] = "GP01";
      console.log(values);
      UserApi.editUserInfo(values)
        .then((response) => {
          dispatch(editInfoUserAction(response.data));
          loadList();
          Swal.fire({
            title: "Bạn đã cập nhật thành công",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
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

  useEffect(() => {
    formik.setValues(valueform);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueform]);

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const loadListKindOfUser = () => {
    return dsMaLoaiNguoiDung.map((item, index) => {
      return (
        <option selected={item.maLoaiNguoiDung === formik.values.maLoaiNguoiDung} value={item.maLoaiNguoiDung} key={index}>
          {item.tenLoai}
        </option>
      );
    });
  };

  // Modal
  const showModal = () => {
    setVisible(true);
    // Set initial value of form
    formik.setValues(valueform);
  };
  const handleCancel = () => {
    setVisible(false);
  };


  const loadList = () => {
    AdminApi.listUser(1, 20)
      .then((response) => {
        dispatch(getListUserAdmin(response.data.items));
        dispatch(getToTalListUserAdmin(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };


  let paginationConfig = {
    totalPages: totalListUser.totalPages,
    currentPage: totalListUser.currentPage,
    showMax: 5,
    size: "md",
    threeDots: false,
    prevNext: true,
    onClick: function (page) {
      console.log("tukhoa", tukhoa);

      if (tukhoa !== "") {
        AdminApi.searchUser(tukhoa, page, 10)
          .then((response) => {
            dispatch(getListUserAdmin(response.data.items));
            dispatch(getToTalListUserAdmin(response.data));
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      } else {
        AdminApi.listUser(page, 20)
          .then((response) => {
            dispatch(getListUserAdmin(response.data.items));
            dispatch(getToTalListUserAdmin(response.data));
          })
          .catch((errorr) => {
            console.log(errorr.response.data);
          });
      }
    },
  };
 

  const renderListUser = () => {
    return listUser.map((item, index) => {
      return (
        <tr
          key={index}
          onClick={() => {
            dispatch(getDetailUserAdmin(item));
          }}
        >
          <td>{item.taiKhoan}</td>
          <td>{item.hoTen}</td>
          <td>{item.email}</td>
          <td>{item.soDt}</td>
          <td>{item.maLoaiNguoiDung === "KhachHang" ? "Khách hàng" : "Quản trị"}</td>
          <td className="group-icon">
            <button className="icon-edit icon-bg" onClick={showModal} on>
              <FontAwesomeIcon className="icon" icon={faEdit} />
            </button>
            <button
              className="icon-delete icon-bg"
              onClick={() => {
                deleteUser(item.taiKhoan);
              }}
            >
              <FontAwesomeIcon className="icon" icon={faTrashAlt} />
            </button>
          </td>
        </tr>
      );
    });
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Xóa Thành Viên",
      text: "Bạn có chắc chắn xóa thành viên này không ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có!",
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        AdminApi.deleteUser(id)
          .then((response) => {
            console.log("deleteUser", response);
            loadList();
            Swal.fire("Đã Xóa!", "Thành viên này đã được xóa.", "success");
          })
          .catch((error) => {
            console.log("deleteUser", error.response.data);
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
    <div className="usermanagement__table mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Tài khoản</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>{renderListUser()}</tbody>
      </table>
      <div className="usermanagement__pagination">
        <Pagination {...paginationConfig} className="test" />
      </div>
      <Modal
        title=""
        visible={visible}
        // onOk={handleOk}
        // confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="editUserModal__title">
          <div className="editUserModal__user">
            <div className="editUserModal__avatar">
              <FontAwesomeIcon className="icon" icon={faUserCircle} />
            </div>
            <div className="editUserModal__text">
              <p className="mb-0">honghuynh</p>
            </div>
          </div>
          <div className="editUserModal__action">
            <button className="btn btn-delete" onClick={() => {
                deleteUser(formik.values.taiKhoan);
              }}>Xóa thành viên</button>
          </div>
        </div>

        <div className="editUserModal__details">
          <div className="row">
            <div className="col-12">
              <div className="editUserModal__details-left">
                <h5 className="title">Chi tiết thành viên</h5>

                <form className="editUserModal__form" onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="form__item">
                        <label>Họ tên</label>
                        <input type="text" name="hoTen" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.hoTen} />
                        {formik.errors.hoTen && formik.touched.hoTen && <small className="text-danger">{formik.errors.hoTen}</small>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__item">
                        <label>Tài khoản</label>
                        <input
                          type="text"
                          name="taiKhoan"
                          className="form-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.taiKhoan}
                        />
                        {formik.errors.taiKhoan && formik.touched.taiKhoan && <small className="text-danger">{formik.errors.taiKhoan}</small>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__item">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                        {formik.errors.email && formik.touched.email && <small className="text-danger">{formik.errors.email}</small>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__item">
                        <label>Mật khẩu</label>
                        <input type="text" name="matKhau" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} />
                        {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__item">
                        <label>Số điện thoại</label>
                        <input type="text" name="soDt" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.soDt} />
                        {formik.errors.soDt && formik.touched.soDt && <small className="text-danger">{formik.errors.soDt}</small>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__item">
                        <label>Mã loại người dùng</label>
                        <select class="form-control" name="maLoaiNguoiDung" value={formik.values.maLoaiNguoiDung} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                          {loadListKindOfUser()}
                        </select>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form__item">
                        <label>Mã nhóm</label>
                        <input type="text" name="maNhom" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value="GP01" />
                        {formik.errors.maNhom && formik.touched.maNhom && <small className="text-danger">{formik.errors.maNhom}</small>}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-update">
                    Cập nhật
                  </button>
                </form>
              </div>
            </div>
            {/* <div className="col-12 col-md-4">
              <div className="editUserModal__details-right">
                <h5 className="title">Thay đổi mật khẩu</h5>
                <form className="editUserModal__form" onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form__item">
                        <label>Mật khẩu cũ</label>
                        <input type="password" name="matKhau" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} />
                        {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form__item">
                        <label>Mật khẩu mới</label>
                        <input type="password" name="matKhau" className="form-control"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} />
                        {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form__item">
                        <label>Nhập lại mật khẩu</label>
                        <input type="password" name="matKhau" className="form-control"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} />
                        {formik.errors.matKhau && formik.touched.matKhau && <small className="text-danger">{formik.errors.matKhau}</small>}
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn-update">
                    Thay đổi
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </Modal>
    </div>
  );
}
