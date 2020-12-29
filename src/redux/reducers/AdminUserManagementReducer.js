import { CREATE_USER_ADMIN, EDIT_INFO_USER_ADMIN, GET_DETAIL_USER_ADMIN, GET_LIST_USER_ADMIN } from "../constants/AdminUserManagementConstant";


const stateDefault = {
    danhSachUserAdmin: [],
    chiTietUserAdmin: {},
    newUser: {},
    thongTinUserAdmin: {},
}



const AdminUserManagementReducer = (state = stateDefault, action) => {
    switch (action.type) {

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

        default: return state;
    }
}

export default AdminUserManagementReducer;