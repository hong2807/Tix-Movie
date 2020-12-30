import callApi from "../ApiConfig";

const AdminApi = {
    listUser: (soTrang,soLuongMotTrang) =>
        callApi
        .get(`QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP12&soTrang=${soTrang}&soPhanTuTrenTrang=${soLuongMotTrang}`),

    listKindOfUser: (taikhoan) =>
        callApi
        .get("QuanLyNguoiDung/LayDanhSachLoaiNguoiDung"),

    deleteUser: (taikhoan) =>
        callApi
        .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`),

    createUser: (data) =>
        callApi
            .post("QuanLyNguoiDung/ThemNguoiDung", data),
    
};
export default AdminApi;