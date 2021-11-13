import {showData,addDashboard} from "../reducer/reducer";
import axios from "axios";

function actionDashboard(){
    return dispatch=>{
        axios.get('http://localhost:8080/get-dashboard')
            .then(({data})=>dispatch(showData(data)))
            .catch(error=>console.log(error))
    }
}
function addActionDashboard(data){
  return dispatch=>{
      axios.post('http://localhost:8080/add-dashboard',data)
          .then(()=>dispatch(addDashboard(data)))
          .catch(error=>console.log(error))
  }
}
export {addActionDashboard,actionDashboard}