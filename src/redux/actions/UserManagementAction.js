import { EDIT_INFO_USER, 
    GET_INFO_USER, 
    } from "../constants/UserManagementConstant"



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

