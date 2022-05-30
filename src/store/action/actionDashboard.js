import {createAsyncThunk} from "@reduxjs/toolkit";
import $http from "../../http/$http";
import data from "bootstrap/js/src/dom/data";
import thunk from "redux-thunk";

const getDashboard = createAsyncThunk(
    'dashboard/get-data',
    async (thunkApi)=>{
        const {data} = await $http.get('/get-dashboard')
        return data
    }
)
const addDashboard = createAsyncThunk(
    'dashboard/add-dashboard',
    async(payload,thunkAPI)=>{
        try{
            const {data} = await $http.post('/add-dashboard',payload)
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e)
        }
    }
)
const updateDashboard = createAsyncThunk(
    'dashboard/update-dashboard',
    async(data,thunkAPI)=>{
        await $http.post('/update-dashboard',data)
        return data
    }
)

const deleteDashboard = createAsyncThunk(
    'dashboard/delete-dashboard',
    async(data,thunkAPI)=>{
        await $http.delete('/delete-dashboard',{
            data:{
                id:data
            }
        })
        return data
    }
)

const getComments = createAsyncThunk(
    'dashboard/get-comments',
    async(id,thunkAPI)=>{
        const {data} = await $http.get(`/get-state/${id}`)

        return {
            data,
            id
        }
    }
)

export {
    getDashboard,
    addDashboard,
    updateDashboard,
    deleteDashboard,
    getComments
}