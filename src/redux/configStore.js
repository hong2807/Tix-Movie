import {combineReducers, createStore} from 'redux';
import AdminUserManagementReducer from './reducers/AdminUserManagementReducer';
import UserManagementReducer from './reducers/UserManagementReducer';


const rootReducer = combineReducers({
    //reducer khai báo tại đây
    UserManagementReducer: UserManagementReducer,
    AdminUserManagementReducer: AdminUserManagementReducer
})


const store = createStore(rootReducer);
export default store;

