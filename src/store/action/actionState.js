import {getState,addState} from "../reducer/reducer";
import axios from "axios";


function actionState(current){
    return dispatch=>{
        axios.get(`http://localhost:8080/get-state/${current}`)
            .then(({data})=>dispatch(getState({
                dashboard_id:current,
                data
            })))
            .catch(error=>console.log(error))
    }
}
function addActionState(state) {
    return dispatch=>{
        axios.post('http://localhost:8080/add-state',state)
            .then(({data})=>dispatch(addState(data)))
            .catch(error=>console.log(error))
    }
}

export  {actionState,addActionState}