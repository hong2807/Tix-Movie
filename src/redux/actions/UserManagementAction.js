import { EDIT_INFO_USER, GET_INFO_USER, GET_LIST_USER_ADMIN } from "../constants/UserManagementConstant"



export const getInfoUserAction = (data) => {
    return  {
            type: GET_INFO_USER,
            listInfoUser: data
    }
}

export const editInfoUserAction = (data) => {
    return  {
            type: EDIT_INFO_USER,
            listEditInfo: data
    }
}

export const getListUserAdmin = (data) => {
    return  {
            type: GET_LIST_USER_ADMIN,
            listUserAdmin: data
    }
}