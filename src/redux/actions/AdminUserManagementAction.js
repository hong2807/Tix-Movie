import {
    GET_LIST_USER_ADMIN, 
    GET_DETAIL_USER_ADMIN, 
    CREATE_USER_ADMIN,
    EDIT_INFO_USER_ADMIN,
    GET_KIND_OF_USER,
    GET_TOTAL_LIST_USER_ADMIN,
    SET_TU_KHOA} from "../constants/AdminUserManagementConstant"




export const getListUserAdmin = (data) => {
    return  {
            type: GET_LIST_USER_ADMIN,
            listUserAdmin: data
    }
}

export const getToTalListUserAdmin = (data) => {
    return  {
            type: GET_TOTAL_LIST_USER_ADMIN,
            totalListUserAdmin: data
    }
}

export const getDetailUserAdmin = (data) => {
    return  {
            type: GET_DETAIL_USER_ADMIN,
            detailUserAdmin: data
    }
}

export const getKindOfUserAction = (data) => {
    return  {
            type: GET_KIND_OF_USER,
            listKindOfUser: data
    }
}

export const createUserAdmin = (data) => {
    return  {
            type: CREATE_USER_ADMIN,
            createUserAdmin: data
    }
}

export const editInfoUserAdminAction = (data) => {
    return  {
            type: EDIT_INFO_USER_ADMIN,
            listEditInfo: data
    }
}

export const setTuKhoa = (data) => {
    return  {
            type: SET_TU_KHOA,
            thongTinTuKhoa: data
    }
}