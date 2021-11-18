import {useDispatch,useSelector} from 'react-redux'
import {useForm,Controller} from 'react-hook-form'
import {useEffect} from 'react'
import {Form,Button,FloatingLabel} from "react-bootstrap";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import actionDepartment from '../../store/action/actionDepartment'
import {addActionDashboard,updateDashboard} from "../../store/action/actionDashboard";
import Select from "react-select";

function FormData({editable,current}){
    const dispatch = useDispatch();
    const department = useSelector(state=>state.dashboard.department);

    const schema = yup.object({
        from:yup.string().required(`'От кого' должно быть заполнено`),
        patient:yup.string().required(`'Пациент' должен быть заполнено`),
        department:yup.string(),
        state:yup.string()
    })

    const {register,handleSubmit,formState:{errors},reset,setValue,control} = useForm({
        resolver:yupResolver(schema)
    })

    useEffect(()=>{
        if(!department.length){
            dispatch(actionDepartment())
        }
        if(current){
            setValue("from",current.from);
            setValue("patient",current.patient)
        }
    },[current,editable])
    const onSubmit=(data)=>{
        if(editable){
            dispatch(updateDashboard({
                ...data,
                dashboard_id:current.dashboard_id,
                department:data.department === '' ? current.department : data.department,
            }
            ))
        }
        else{
            dispatch(addActionDashboard(data))
        }
        reset({})
    }
    return(
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
                    <Controller
                        defaultValue="Введите"
                        render={({field:{onChange,ref}})=>(
                            <Select
                                 placeholder="Введите..."
                                isSearchable
                                isClearable
                                inputRef={ref}
                                options={department}
                                onChange={val=>val !== null ? onChange(val.value) : false}
                            />
                        )}
                        name="department"
                        control={control}
                    />
                </Form.Group>
            {!editable &&
            <FloatingLabel controlId="floatingTextarea2" label="Состояние">
                <Form.Control
                    {...register('state')}
                    as="textarea"
                    placeholder="Введите состояние"
                    style={{height:'100px'}}
                />
            </FloatingLabel>
            }
                <Button type="submit">{editable ?  'Редактировать' : 'Добавить' }</Button>
            </Form>
    )
}


export default FormData