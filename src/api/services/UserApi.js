import callApi from "../ApiConfig";

const UserApi = {
  createUser: (data) =>
    callApi
      .post("QuanLyNguoiDung/DangKy", data),

  signIn: (data) =>
      callApi
        .post("QuanLyNguoiDung/DangNhap", data),

  userInfo: (data) =>
      callApi
        .post("QuanLyNguoiDung/ThongTinTaiKhoan", data),

  editUserInfo: (data) =>
      callApi
        .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", data),

  listUser: (soTrang,soLuongMotTrang) =>
      callApi
        .get(`QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soLuongMotTrang}`),
    
};
export default UserApi;
// data = {
//   username: 'ssds',
//   password: 'dssdsd'
// }