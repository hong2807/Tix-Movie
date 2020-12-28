import { EDIT_INFO_USER, GET_DETAIL_USER_ADMIN, GET_INFO_USER, GET_LIST_USER_ADMIN } from "../constants/UserManagementConstant";

const stateDefault = {
    thongTinUser: {},
    danhSachUserAdmin: [],
    chiTietUserAdmin: {},
}



const UserManagementReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_INFO_USER: {
            console.log(state, action);
            state.thongTinUser = action.listInfoUser;
            return {...state}
        }

        case EDIT_INFO_USER: {
            console.log(state, action);
            state.thongTinUser = action.listEditInfo;
            return {...state}
        }

        case GET_LIST_USER_ADMIN: {
            console.log(state, action);
            state.danhSachUserAdmin = action.listUserAdmin;
            return {...state}
        }

        case GET_DETAIL_USER_ADMIN: {
            console.log(state, action);
            state.chiTietUserAdmin = action.detailUserAdmin;
            return {...state}
        }

        default: return state;
    }
}

export default UserManagementReducer;