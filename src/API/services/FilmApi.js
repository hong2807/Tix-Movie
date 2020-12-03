import callApi from "../ApiConfig";

const FilmApi = {
  getFilmList: () =>
    callApi
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
};
export default FilmApi;
