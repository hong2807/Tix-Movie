import { EDIT_INFO_USER, GET_INFO_USER, GET_LIST_USER_ADMIN } from "../constants/UserManagementConstant";

const stateDefault = {
    thongTinUser: {},
    danhSachUserAdmin: [],
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
            state.danhSachUserAdmin = action.listUser;
            return {...state}
        }

        default: return state;
    }
}

export default UserManagementReducer;