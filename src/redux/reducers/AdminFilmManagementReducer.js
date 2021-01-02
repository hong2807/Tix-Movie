import { GET_DETAIL_FILM_ADMIN, GET_LIST_FILM_ADMIN } from "../constants/AdminFilmManagementConstant";



const stateDefault = {
    danhSachFilmAdmin: {},
    chiTietFilmAdmin: {},
    thongTinFilmAdmin: {},
}


const AdminFilmManagementReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_LIST_FILM_ADMIN: {
            console.log(state, action);
            state.danhSachFilmAdmin = action.listFilmAdmin;
            return {...state}
        }

        case GET_DETAIL_FILM_ADMIN: {
            console.log(state, action);
            state.chiTietFilmAdmin = action.detailFilmAdmin;
            return {...state}
        }

        default: return state;
    }
}

export default AdminFilmManagementReducer;