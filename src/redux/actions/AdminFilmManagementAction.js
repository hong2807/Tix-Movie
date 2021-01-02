import {  GET_LIST_FILM_ADMIN } from "../constants/AdminFilmManagementConstant"
import { GET_DETAIL_FILM_ADMIN } from "../constants/AdminFilmManagementConstant"



export const getListFilmAdminAction = (data) => {
    return  {
            type: GET_LIST_FILM_ADMIN,
            listFilmAdmin: data
    }
}

export const getDetailFilmAdminAction = (data) => {
    return  {
            type: GET_DETAIL_FILM_ADMIN,
            detailFilmAdmin: data
    }
}


