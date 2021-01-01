import { GET_LIST_FILM_ADMIN } from "../constants/AdminFilmManagementConstant";



const stateDefault = {
    danhSachFilmAdmin: {},
}



const AdminFilmManagementReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case GET_LIST_FILM_ADMIN: {
            console.log(state, action);
            state.danhSachFilmAdmin = action.listFilmAdmin;
            return {...state}
        }

        default: return state;
    }
}

export default AdminFilmManagementReducer;