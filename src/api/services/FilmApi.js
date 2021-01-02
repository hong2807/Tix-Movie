import callApi from "../ApiConfig";

const FilmApi = {
  getFilmList: () =>
    callApi
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),

  getFilmCommingSoonList: () =>
      callApi
        .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP06"),

  getFilmDetail: (Id) =>
      callApi
        .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${Id}`),

};
export default FilmApi;
