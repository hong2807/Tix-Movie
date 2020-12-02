import CallApi from '../ApiConfig';

// export const layThongTinCumRap = () => {
//   return CallApi.get('QuanLyRap/LayThongTinHeThongRap').then(response => response.data);
// };

export const getFilmList = () => {
    CallApi({
        url: 'QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        method: 'GET'
      }).then( (response) => {
        console.log('Kết quả: ', response.data);
      }).catch( (error) => {
        console.log('Lỗi: ', error.data);
      })
}
