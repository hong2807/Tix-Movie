import callApi from "../ApiConfig";

const FilmApi = {
  getFilmList: () =>
    callApi
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),
  getFilmDetail: (Id) =>
      callApi
        .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${Id}`),

};
export default FilmApi;
