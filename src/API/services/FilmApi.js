import callApi from "../ApiConfig";

const FilmApi = {
  getFilmList: () =>
    callApi
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),
  getFilmDetail: () =>
      callApi
        .get("QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1314"),

};
export default FilmApi;
