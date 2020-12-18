import callApi from "../ApiConfig";

const BookingApi = {
    getChairList: (maLichChieu) =>
        callApi.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`),
    }
export default BookingApi;