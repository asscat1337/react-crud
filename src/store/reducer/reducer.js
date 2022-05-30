import {createSlice} from "@reduxjs/toolkit";
import {addDashboard, deleteDashboard, getComments, getDashboard, updateDashboard} from "../action/actionDashboard";
import {getDepartment} from "../action/actionDepartment";
import {addComments} from "../action/actionState";



const initialState = {
    data:[],
    department:[],
    loading:true,
    error:''
}

const reducer = createSlice({
    name:'dashboard',
    initialState:initialState,
    reducers:{},
    extraReducers:(reducer)=>{
        reducer.addCase(getDashboard.fulfilled.type,(state,action)=>{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        })
        reducer.addCase(addDashboard.fulfilled.type,(state,action)=>{
            console.log(action.payload)
            return {
                ...state,
                loading:false,
                data: [...state.data,action.payload]
            }
        })
        reducer.addCase(getDepartment.fulfilled.type,(state,action)=>{
            return {
                ...state,
                department:action.payload
            }
        })
        reducer.addCase(updateDashboard.fulfilled.type,(state,action)=>{
            return {
                ...state,
                data:state.data.map(item=>{
                    if(item.dashboard_id === +action.payload.id){
                        return {
                            ...item,
                            department: action.payload.department,
                            from:action.payload.from,
                            patient:action.payload.patient
                        }
                    }
                    return item
                })
            }
        })
        reducer.addCase(deleteDashboard.fulfilled.type,(state,action)=>{
            return {
                ...state,
                data:state.data.filter(item=>item.dashboard_id !== action.payload)
            }
        })
        reducer.addCase(getComments.fulfilled.type,(state,action)=>{
            return {
                ...state,
                data:state.data.map(item=>{
                    if(item.dashboard_id === action.payload.id){
                        return {
                            ...item,
                            children:action.payload.data
                        }
                    }
                    return item
                })
            }
        })
        reducer.addCase(addComments.fulfilled.type,(state,action)=>{
            return {
                ...state,
                data:state.data.map(item=>{
                    if(item.dashboard_id === action.payload.patient_id){
                        return {
                            ...item,
                            last_state_update:action.payload.date,
                            children:[...item.children,action.payload]
                        }
                    }
                    return item
                })
            }
        })
    }
})

// function reducer(state=initialState,action){
//     console.log(action.payload)
//     switch (action.type) {
//         case SHOW_DATA :
//             return {
//                 ...state,
//                 data:[...state.data,action.payload].flat(),
//                 loading: false,
//                 error:''
//             };
//         case GET_DEPARTMENT :
//             return {
//                 ...state,
//                 loading: false,
//                 department: [...state.department,action.payload].flat(),
//                 error: ''
//             };
//         case GET_STATE :
//             return {
//                 ...state,
//                 loading: false,
//                 data: state.data.map(item=>{
//                     if(item.dashboard_id===action.payload.dashboard_id){
//                         return  {
//                             ...item,
//                             children:[...item.children,action.payload.data].flat()
//                         }
//                     }
//                     return item
//                 }),
//                 error:''
//             };
//         case ADD_DASHBOARD :
//             return {
//                 ...state,
//                 data:[...state.data,action.payload]
//             }
//         case DELETE_DATA:{
//             return {
//                 ...state,
//                 loading:false,
//                 data:state.data.filter(item=>item.dashboard_id !== action.payload)
//             }
//         }
//         case UPDATE_DASHBOARD :
//             return {
//                 ...state,
//                 loading:false,
//                 data:state.data.map(item=>{
//                     if(item.dashboard_id===action.payload.dashboard_id){
//                         return {
//                             ...item,
//                             from:action.payload.from,
//                             patient:action.payload.patient,
//                             department:action.payload.department,
//                         }
//                     }
//                         return item
//                 })
//             }
//         case ADD_STATE :
//             return {
//                 ...state,
//                 loading: false,
//                 data:state.data.map(item=>{
//                     if (item.dashboard_id === action.payload.patient_id){
//                         return {
//                             ...item,
//                             children:[...item.children,action.payload]
//                         }
//                     }
//                     return item
//                 })
//             }
//         case UPDATE_PATIENT_STATE :
//             return {
//                 ...state,
//                 loading: false,
//                 data:state.data.map(item=>{
//                     if(item.dashboard_id === action.payload.patient_id){
//                         return {
//                             ...item,
//                             state:action.payload.title,
//                             last_state_update:action.payload.last_state_update
//                         }
//                     }
//                     return item
//                 })
//             }
//         case LOAD_DASHBOARD :
//             return {
//                 ...state,
//                 error:'',
//                 loading: true
//             }
//         default: return state
//
//     }
// }
//
//
// export const getDepartment=payload=>({type:GET_DEPARTMENT,payload});
// export const getState=payload=>({type:GET_STATE,payload});
// export const showData=payload=>({type:SHOW_DATA,payload});
// export const addDashboard=payload=>({type:ADD_DASHBOARD,payload});
// export const deleteDashboard=payload=>({type:DELETE_DATA,payload});
// export const updateActionDashboard=payload=>({type:UPDATE_DASHBOARD,payload});
// export const addState=payload=>({type:ADD_STATE,payload});
// export const updatePatientState=payload=>({type:UPDATE_PATIENT_STATE,payload});
// export const loadDashboard=payload=>({type:LOAD_DASHBOARD,payload})

export default reducer