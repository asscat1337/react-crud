import {getState} from "../reducer/reducer";
import axios from "axios";


function actionState(){
    return dispatch=>{
        axios.get('http://localhost:8080/get-state')
            .then(({data})=>dispatch(getState(data)))
            .catch(error=>console.log(error))
    }
}

export default actionState