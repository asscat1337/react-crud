import {Navigate,useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";

function PrivateRoute({children}) {
    const isAuth = sessionStorage.getItem('isAuth');
    const location = useLocation()
        return !!isAuth ? children :
            <Navigate
                to="/login"
                state={{path:location.pathname}}
            />;
}


export default PrivateRoute