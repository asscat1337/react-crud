import axios from 'axios'




const $http = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    withCredentials:true
})

$http.interceptors.request.use(config=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
})


export default $http