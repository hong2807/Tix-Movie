import callApi from "../ApiConfig";

const BookingApi = {
    getChairList: () =>
        callApi.get('/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16099'),
    }
export default BookingApi;