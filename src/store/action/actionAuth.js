import {createAsyncThunk} from '@reduxjs/toolkit'
import $http from "../../http/$http";




const login = createAsyncThunk(
    'auth/login',
    async(user,thunkApi)=>{
        try{
            const {data} = await $http.post('/auth/login',user)
            return data
        }catch (e) {
            thunkApi.rejectWithValue(e)
        }
    }
)
// const logout = createAsyncThunk(
//     'auth/logout',
//     async (thunkAPI)=>{
//
//     }
// )
export {
    login
}