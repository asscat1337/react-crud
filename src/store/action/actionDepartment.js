import {createAsyncThunk} from "@reduxjs/toolkit";
import $http from "../../http/$http";



const getDepartment=createAsyncThunk(
    'department/get-data',
    async (thunkAPI)=>{
       const {data} = await $http.get('/get-department')
        return data
    })

export {
    getDepartment
}
