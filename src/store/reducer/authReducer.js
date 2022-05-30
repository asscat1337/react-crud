import {LOAD_USER, LOGIN_USER,LOGOUT_USER} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {login} from "../action/actionAuth";

const initialState = {
    user:[],
    isAuth:false,
    loading:true
}

const isLogin = sessionStorage.getItem('isAuth');

const authReducer = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    extraReducers:(reducer)=>{
        reducer.addCase(login.fulfilled.type,(state,action)=>{
            return {
                ...state,
                isAuth:true,
                loading: false,
                user:action.payload
            }
        })
    }
})
export const actionLoginUser=payload=>({type:LOGIN_USER,payload});
export const loadAuthUser=payload=>({type:LOAD_USER,payload});
export const logoutUser=()=>({type:LOGOUT_USER});
export default authReducer