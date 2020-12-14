import callApi from "../ApiConfig";

const UserApi = {
  createUser: (data) =>
    callApi
      .post("QuanLyNguoiDung/DangKy", data),
      
};
export default UserApi;
// data = {
//   username: 'ssds',
//   password: 'dssdsd'
// }