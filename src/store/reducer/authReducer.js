import {LOAD_USER, LOGIN_USER} from "../types";

const initialState = {
    user:[],
    isAuth:false,
    loading:true
}

const isLogin = sessionStorage.getItem('isAuth');
console.log(isLogin)

function authReducer(state=initialState,action){
    switch (action.type) {
        case LOAD_USER :
            return {
                isAuth: false,
                loading:true,
                user:[]
            };
        case LOGIN_USER :
            return {
                isAuth: true,
                user:[...state.user,{login:action.payload.login}],
                loading: false
            }
        default :
            return state
    }
}
export const actionLoginUser=payload=>({type:LOGIN_USER,payload});
export const loadAuthUser=payload=>({type:LOAD_USER,payload})
export default authReducer