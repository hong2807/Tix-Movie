import callApi from "../ApiConfig";

const CinemaApi = {
    getCinemaList: () =>
        callApi.get("QuanLyRap/LayThongTinHeThongRap"),

    getCinemaDetailList: (maHeThongRap) =>
        callApi.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`),

    getCinemaDetailAndRoomList: (maHeThongRap) =>
        callApi.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    };
export default CinemaApi;