import {useState,useEffect} from 'react'
import {useDispatch,useSelector}  from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate,useLocation} from 'react-router-dom'
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import styles from './Login.module.scss'
import {Form,Button} from 'react-bootstrap';

import {LoginUser} from "../../../store/action/actionAuth";

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth.isAuth)
    const schema = yup.object().shape({
        login:yup.string().required('Поле должно быть заполнено'),
        password:yup.string().required('Поле должно быть заполнено')
    })

    useEffect(()=>{
        if(auth){
            navigate('/dashboard')
        }
    },[auth])

    const {handleSubmit,register,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })
    const [checkPassword,setCheckPassword] = useState(false)
    const onCheckPassword=()=>{
        setCheckPassword(!checkPassword)
    }
    const submitForm=(data)=>{
        dispatch(LoginUser(data))
    }
    return (
        <div className={styles.login}>
            <div className={styles.formWrapper}>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            {...register('login')}
                            type="text"
                            placeholder="Введите логин"
                        />
                        <p>{errors.login?.message}</p>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            {...register('password')}
                            type={checkPassword ? "text" :"password"}
                            placeholder="Введите пароль"/>
                            <p>{errors.password?.message}</p>
                        <Form.Check type="checkbox" label="Показать пароль" onClick={onCheckPassword}/>
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit">
                        Авторизация
                    </Button>
                </Form>
            </div>
        </div>

    )
}


export default Login