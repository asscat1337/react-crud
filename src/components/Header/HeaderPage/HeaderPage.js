import {useDispatch} from "react-redux";
import {Form,Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {logoutUser} from "../../../store/reducer/authReducer";
import styles from './HeaderPage.module.scss'


function HeaderPage({setTheme,stateTheme}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout=()=>{
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('isAuth');
        dispatch(logoutUser());
        navigate('/')
    }
    const onChangeTheme=()=>{
        localStorage.setItem('theme',stateTheme==='light' ? 'dark' : 'light');
        setTheme(localStorage.getItem('theme'))
    }
    return (
        <div className={styles.header}>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="check this switch"
                    onChange={onChangeTheme}
                />
                <Button variant="primary" onClick={logout}>Выход</Button>
        </div>
    )
}


export default HeaderPage