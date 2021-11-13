import {useForm,Controller} from 'react-hook-form'
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import {Form,Button} from "react-bootstrap";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import actionDepartment from "../../../store/action/actionDepartment";
import actionState from "../../../store/action/actionState";
import {addDashboard} from "../../../store/reducer/reducer";
import {addActionDashboard} from "../../../store/action/actionDashboard";

function Add() {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.state);
    const department = useSelector(state=>state.department);

    useEffect(()=>{
       dispatch(actionDepartment())
        dispatch(actionState())
    },[])

    const schema = yup.object({
        from:yup.string().required(`'От кого' должно быть заполнено`),
        patient:yup.string().required(`'Пациент' должен быть заполнено`),
        department:yup.string().required(),
        state:yup.string().required()
    })
    const {register,handleSubmit,formState:{errors},control} = useForm({
        resolver:yupResolver(schema)
    })
    const onSubmit =(data)=>dispatch(addActionDashboard(data))
    return (
        <>
            <div>Hello</div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>От кого</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите..."
                        className={`${errors.from?.message ? 'is-invalid' : ''}`}
                        {...register('from')}
                    />
                    {errors.from?.message ?
                    <p className='text-danger'>{errors.from?.message}</p>
                        :
                        null
                    }
                </Form.Group>
                <Form.Group>
                    <Form.Label>Пациент</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите..."
                        {...register('patient')}
                    />
                    {errors.patient?.message ?
                        <p className='text-danger'>{errors.patient?.message}</p>
                        :
                        null
                    }

                </Form.Group>

                <Form.Group>
                    <Form.Label>Отделение</Form.Label>
                    <Form.Select
                        {...register('department')}
                    >
                        <option disabled>Выберите отделение</option>
                        {
                            department.map(item=>(
                                <option key={item.department_id}>{item.title}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Состояние</Form.Label>
                    <Form.Select
                        {...register('state')}
                    >
                        <option disabled>Выберите состояние</option>
                        {state.map(item=>(
                            <option key={item.state_id}>{item.title}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button type="submit">Добавить</Button>
            </Form>
        </>
    )
}


export default Add