import {SHOW_LIST, ADD_LIST, ERROR_LIST, ADD_FILES} from "../types";

const initialState ={
    list:[],
    loading:true,
    error:''
}

function adminReducer(state=initialState,action){
        switch (action.type) {
            case SHOW_LIST :
                return {
                    error:'',
                    loading:false,
                    list:action.payload
                };
            case ADD_LIST :
                return {
                    error:'',
                    loading:false,
                    list:[...state.list,action.payload]
                };
            case ERROR_LIST :
                return {
                    ...state,
                    loading: true,
                    error: action.payload
                };
            case ADD_FILES :
                return {
                    ...state,
                    files:action.payload
                }
            default:
                return state
        }
}

export const showList=(payload)=>({type:SHOW_LIST,payload});
export const addList=(payload)=>({type:ADD_LIST,payload});
export const errorList=(payload)=>({type:ERROR_LIST,payload});
export const uploadFiles=(payload)=>({type:ADD_FILES,payload});


export default adminReducer