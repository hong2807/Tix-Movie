import {combineReducers, createStore} from 'redux';
import AdminFilmManagementReducer from './reducers/AdminFilmManagementReducer';
import AdminUserManagementReducer from './reducers/AdminUserManagementReducer';
import PreloaderReducer from './reducers/PreloaderReducer';
import UserManagementReducer from './reducers/UserManagementReducer';


const rootReducer = combineReducers({
    //reducer khai báo tại đây
    UserManagementReducer: UserManagementReducer,
    AdminUserManagementReducer: AdminUserManagementReducer,
    AdminFilmManagementReducer: AdminFilmManagementReducer,
    PreloaderReducer: PreloaderReducer,
})


const store = createStore(rootReducer);
export default store;

