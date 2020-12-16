import callApi from "../ApiConfig";

const UserApi = {
  createUser: (data) =>
    callApi
      .post("QuanLyNguoiDung/DangKy", data),

  signIn: (data) =>
      callApi
        .post("QuanLyNguoiDung/DangNhap", data),
      
};
export default UserApi;
// data = {
//   username: 'ssds',
//   password: 'dssdsd'
// }