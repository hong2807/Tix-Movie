import callApi from "../ApiConfig";

const BookingApi = {
    getChairList: (maLichChieu) =>
        callApi.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`),
    booking: (data) =>
        callApi.post("/QuanLyDatVe/DatVe",data),
}
export default BookingApi;