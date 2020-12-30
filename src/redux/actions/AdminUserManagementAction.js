import {
    GET_LIST_USER_ADMIN, 
    GET_DETAIL_USER_ADMIN, 
    CREATE_USER_ADMIN,
    EDIT_INFO_USER_ADMIN,
    GET_KIND_OF_USER} from "../constants/AdminUserManagementConstant"




export const getListUserAdmin = (data) => {
    console.log("getListUserAdmin",data)
    return  {
            type: GET_LIST_USER_ADMIN,
            listUserAdmin: data
    }
}

export const getDetailUserAdmin = (data) => {
    console.log("getDetailUserAdmin",data)
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
    console.log("createUserAdmin",data)
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