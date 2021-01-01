import callApi from "../ApiConfig";

const AdminApi = {
    listUser: (soTrang,soLuongMotTrang) =>
        callApi
        .get(`QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soLuongMotTrang}`),

    listKindOfUser: (taikhoan) =>
        callApi
        .get("QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"),

    deleteUser: (taikhoan) =>
        callApi
        .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`),

    createUser: (data) =>
        callApi
            .post("QuanLyNguoiDung/ThemNguoiDung", data),

    searchUser: (tuKhoa,soTrang,soLuongMotTrang) =>
        callApi
            .get(`QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${tuKhoa}&soTrang=${soTrang}&soPhanTuTrenTrang=${soLuongMotTrang}`),

};
export default AdminApi;