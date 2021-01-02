import { SET_PRELOADER } from "../constants/PreloaderConstant";

const stateDefault = {
    isShow: (false),
}

const PreloaderReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_PRELOADER: {
            console.log('SET_PRELOADER', action, state);
            state.isShow = action.isShow;
            return {...state}
        }
        
        default: return state;
    }
}

export default PreloaderReducer;
