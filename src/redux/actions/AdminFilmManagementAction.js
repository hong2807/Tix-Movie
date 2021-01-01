import { GET_LIST_FILM_ADMIN } from "../constants/AdminFilmManagementConstant"



export const getListFilmAdminAction = (data) => {
    console.log("getListFilmAdminAction",data)
    return  {
            type: GET_LIST_FILM_ADMIN,
            listFilmAdmin: data
    }
}

