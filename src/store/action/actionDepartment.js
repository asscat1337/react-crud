import {getDepartment} from "../reducer/reducer";
import axios from "axios";



function actionDepartment(){
    return dispatch=>{
        axios.get('http://localhost:8080/get-department')
            .then(({data})=>dispatch(getDepartment(data)))
            .catch(error=>console.log(error))
    }
}

export default actionDepartment