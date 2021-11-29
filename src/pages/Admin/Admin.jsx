import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {Form,Button} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {actionAddList,actionShowList,actionAddFiles} from "../../store/action/actionAdmin";
import * as yup from 'yup'
import styles from './Admin.module.scss'

function Admin(){
    const dispatch = useDispatch();
    const users = useSelector(state=>state.admin.list)
    const [showPassword,setShowPassword] = useState(false);
    const schema = yup.object().shape({
        fio:yup.string().required(),
        password:yup.string().required(),
        login:yup.string().required()
    })
    const {register,handleSubmit} = useForm({
        resolver:yupResolver(schema)
    })

    useEffect(()=>{
        dispatch(actionShowList())
    },[])

    const onChangeCheckBox=()=>{
       setShowPassword(!showPassword)
    };
    const onSubmitForm=(data)=>{
        dispatch(actionAddList(data))
    };

    const onAddFiles=(e)=>{
        const file = e.target.files[0]
        dispatch(actionAddFiles(file))
    };

    return(
        <div>
            <h1>Admin</h1>
            <div>
                <h5>Форма добавления пользователя</h5>
                <Form onSubmit={handleSubmit(onSubmitForm)}>
                    <Form.Group>
                        <Form.Label>Логин</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите логин..."
                            {...register('login')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите фио..."
                            {...register('fio')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Введите пароль..."
                            {...register('password')}
                        />
                        <Form.Check
                            onChange={onChangeCheckBox}
                            label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                        />
                    </Form.Group>
                    <Button
                        variant="success"
                        as="input"
                        type="submit"
                        value="Добавить"
                    />
                </Form>
                <div>
                    <h5>Список пользователей</h5>
                    {users?.length ? (
                        users?.map((item)=>(
                            <div key={item.user_id} className={styles.user}>
                                <div>Логин:{item.login}</div>
                                <div>Фио:{item.fio}</div>
                            </div>
                        ))
                    ):(
                        <div>
                            Нет данных
                        </div>
                    )}
                </div>
                <h5>Загрузить список</h5>
                <>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Выберите файл для загрузки</Form.Label>
                        <Form.Control type="file" onChange={onAddFiles}/>
                    </Form.Group>
                </>
            </div>
        </div>
    )
}

export default Admin