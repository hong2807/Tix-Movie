import { CREATE_USER_ADMIN, EDIT_INFO_USER_ADMIN, GET_DETAIL_USER_ADMIN, GET_KIND_OF_USER, GET_LIST_USER_ADMIN, GET_TOTAL_LIST_USER_ADMIN, SET_TU_KHOA } from "../constants/AdminUserManagementConstant";


const stateDefault = {
    danhSachUserAdmin: [],
    sumDanhSachUserAdmin: {},
    chiTietUserAdmin: {},
    newUser: {},
    thongTinUserAdmin: {},
    maLoaiNguoiDung: [],
    tuKhoa: "",
}



const AdminUserManagementReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_LIST_USER_ADMIN: {
            console.log(state, action);
            state.danhSachUserAdmin = action.listUserAdmin;
            return {...state}
        }

        case GET_TOTAL_LIST_USER_ADMIN: {
            console.log(state, action);
            state.sumDanhSachUserAdmin = action.totalListUserAdmin;
            return {...state}
        }

        case GET_DETAIL_USER_ADMIN: {
            console.log(state, action);
            state.chiTietUserAdmin = action.detailUserAdmin;
            return {...state}
        }

        case GET_KIND_OF_USER: {
            console.log(state, action);
            state.maLoaiNguoiDung = action.listKindOfUser;
            return {...state}
        }

        case CREATE_USER_ADMIN: {
            console.log(state, action);
            state.newUser = action.createUserAdmin;
            return {...state}
        }

        case EDIT_INFO_USER_ADMIN: {
            console.log(state, action);
            state.thongTinUserAdmin = action.listEditInfo;
            return {...state}
        }

        case SET_TU_KHOA: {
            console.log(state, action);
            state.tuKhoa = action.thongTinTuKhoa;
            return {...state}
        }

        default: return state;
    }
}

export default AdminUserManagementReducer;