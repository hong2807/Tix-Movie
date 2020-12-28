import {combineReducers, createStore} from 'redux';
import UserManagementReducer from './reducers/UserManagementReducer';





const rootReducer = combineReducers({
    //reducer khai báo tại đây
    UserManagementReducer: UserManagementReducer,
})



const store = createStore(rootReducer);




export default store;

