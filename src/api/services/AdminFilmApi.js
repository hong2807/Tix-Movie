import callApi from "../ApiConfig";

const AdminFilmApi = {
    listFilm: (soTrang,soLuongMotTrang) =>
        callApi
        .get(`QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soLuongMotTrang}`),

    updateFilm: (data) =>
        callApi
          .post("QuanLyPhim/CapNhatPhim", data),

    updateImageFilm: (data) =>
        callApi
        .post("QuanLyPhim/UploadHinhAnhPhim", data),

    deleteFilm: (maPhim) =>
        callApi
        .delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`),

    createFilm: (data) =>
        callApi
            .post("QuanLyPhim/ThemPhim", data),

    createScheduleFilm: (data) =>
        callApi
            .post("QuanLyDatVe/TaoLichChieu", data),
};
export default AdminFilmApi;