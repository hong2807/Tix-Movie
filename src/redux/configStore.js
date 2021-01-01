import {combineReducers, createStore} from 'redux';
import AdminFilmManagementReducer from './reducers/AdminFilmManagementReducer';
import AdminUserManagementReducer from './reducers/AdminUserManagementReducer';
import UserManagementReducer from './reducers/UserManagementReducer';


const rootReducer = combineReducers({
    //reducer khai báo tại đây
    UserManagementReducer: UserManagementReducer,
    AdminUserManagementReducer: AdminUserManagementReducer,
    AdminFilmManagementReducer: AdminFilmManagementReducer,
})


const store = createStore(rootReducer);
export default store;

