import {
    showData,
    addDashboard,
    deleteDashboard,
    updateActionDashboard,
    updatePatientState
} from "../reducer/reducer";
import axios from "axios";

function actionDashboard(){
    return dispatch=>{
        axios.get('http://localhost:8080/get-dashboard',
            {headers:{
                "Authorization":`Bearer ${sessionStorage.getItem('token')}`
                }
            })
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
function deleteData(data){
    return dispatch=>{
        axios.delete('http://localhost:8080/delete-dashboard',{data:{id:data}})
        .then(()=>dispatch(deleteDashboard(data)))
        .catch(error=>console.log(error))
    }
}
function updateDashboard(data){
    return dispatch=>{
        axios.post('http://localhost:8080/update-dashboard',data)
        .then(()=>dispatch(updateActionDashboard(data)))
        .catch(error=>console.log(error))
    }
}
function actionUpdateStateDashboard(data){
    console.log(data)
    return dispatch=>{
        axios.post('http://localhost:8080/update-state-dashboard',data)
            .then(()=>dispatch(updatePatientState(data)))
            .catch(error=>console.log(error))
    }
}
export {addActionDashboard,actionDashboard,deleteData,updateDashboard,actionUpdateStateDashboard}