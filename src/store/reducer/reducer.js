import {SHOW_DATA,GET_STATE,GET_DEPARTMENT,ADD_DASHBOARD} from "../types";



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
        default: return state

    }
}


export const getDepartment=payload=>({type:GET_DEPARTMENT,payload});
export const getState=payload=>({type:GET_STATE,payload});
export const showData=payload=>({type:SHOW_DATA,payload});
export const addDashboard=payload=>({type:ADD_DASHBOARD,payload});

export default reducer