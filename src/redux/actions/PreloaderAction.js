import { SET_PRELOADER } from "../constants/PreloaderConstant"


export const setPreloader = (data) => {
    console.log('setPreloader', data);
    return  {
        type: SET_PRELOADER,
        isShow: data
    }
}