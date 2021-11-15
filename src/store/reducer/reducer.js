import {SHOW_DATA,
    GET_STATE,GET_DEPARTMENT,
    ADD_DASHBOARD,
    DELETE_DATA,
    UPDATE_DASHBOARD
} from "../types";



const initialState = {
    data:[],
    department:[],
    state:[],
    loading:true,
    error:''
}

function reducer(state=initialState,action){
    switch (action.type) {
        case SHOW_DATA :
            return {
                ...state,
                data:[...state.data,action.payload].flat(),
                loading: false,
                error:''
            };
        case GET_DEPARTMENT :
            return {
                ...state,
                loading: false,
                department: [...state.department,action.payload].flat(),
                error: ''
            };
        case GET_STATE :
            return {
                ...state,
                loading: false,
                state: [...state.state,action.payload].flat(),
                error:''
            };
        case ADD_DASHBOARD :
            return {
                ...state,
                data:[...state.data,action.payload]
            }
        case DELETE_DATA:{
            return {
                ...state,
                data:state.data.filter(item=>item.dashboard_id !== action.payload)
            }
        }  
        case UPDATE_DASHBOARD :
            return {
                ...state,
                data:state.data.map(item=>{
                    console.log(item)
                    if(item.dashboard_id===action.payload.dashboard_id){
                        return {
                            ...item,
                            from:action.payload.from,
                            patient:action.payload.patient,
                            department:action.payload.department,
                            state:action.payload.state
                        }
                    }
                        return item
                })
            }  
        default: return state

    }
}


export const getDepartment=payload=>({type:GET_DEPARTMENT,payload});
export const getState=payload=>({type:GET_STATE,payload});
export const showData=payload=>({type:SHOW_DATA,payload});
export const addDashboard=payload=>({type:ADD_DASHBOARD,payload});
export const deleteDashboard=payload=>({type:DELETE_DATA,payload})
export const updateActionDashboard=payload=>({type:UPDATE_DASHBOARD,payload})

export default reducer