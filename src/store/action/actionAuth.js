import {actionLoginUser,loadAuthUser} from "../reducer/authReducer";
import axios from 'axios'



function LoginUser(user){
    return dispatch=>{
        dispatch(loadAuthUser())
        axios.post('http://localhost:8080/auth/login',user)
            .then(({data})=>{
                dispatch(actionLoginUser(user))
                sessionStorage.setItem('token',data.token)
                sessionStorage.setItem('isAuth',data.success)
            })
            .catch(error=>console.log(error))
    }
}



export {LoginUser}