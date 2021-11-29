import {actionLoginUser,loadAuthUser,logoutUser} from "../reducer/authReducer";
import axios from 'axios'



function LoginUser(user){
    return dispatch=>{
        dispatch(loadAuthUser())
        axios.post('http://localhost:8080/auth/login',user)
            .then(({data})=>{
                dispatch(actionLoginUser(user))
                sessionStorage.setItem('token',data.token)
                sessionStorage.setItem('isAuth',data.success)
                sessionStorage.setItem('fio',data.fio)
            })
            .catch(error=>console.log(error))
    }
}
function LogoutUser(){
    return dispatch=>{
        dispatch(logoutUser())
    }
}


export {LoginUser,logoutUser}