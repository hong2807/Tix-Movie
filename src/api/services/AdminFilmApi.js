import callApi from "../ApiConfig";

const AdminFilmApi = {
    listFilm: (soTrang,soLuongMotTrang) =>
        callApi
        .get(`QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soLuongMotTrang}`),

};
export default AdminFilmApi;