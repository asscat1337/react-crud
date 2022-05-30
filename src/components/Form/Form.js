import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useForm,Controller} from 'react-hook-form'
import {TextField,
    Button,
    Box,
    Container,
    Autocomplete
} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
 // import actionDepartment from '../../store/action/actionDepartment'
import {addDashboard, updateDashboard} from "../../store/action/actionDashboard";
// import {addActionDashboard,updateDashboard} from "../../store/action/actionDashboard";
import {AppContext} from "../../pages/Dashboard/Dashboard";

function FormData({editData = {},id}){

    const {editable} = React.useContext(AppContext)
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

        React.useEffect(()=>{
    //     if(!department.length){
    //         dispatch(actionDepartment())
    //     }
        if(editData){
            setValue("from",editData.from);
            setValue("patient",editData.patient)
        }
     },[editData,editable])
     const onSubmit=async(data)=>{
        if(editable){
           await dispatch(updateDashboard({
                ...editData,
                ...data,
                id
            }))
        }
        else{
            await dispatch(addDashboard(data))
        }
        reset({})
     }
    return(
        <Box>
            <Container>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{
                    marginTop:8,
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:'column',
                    alignItems:'center'
                }}>
                    <label>От кого</label>
                    <TextField
                        type="text"
                        variant="standard"
                        placeholder="Введите..."
                        fullWidth
                        {...register('from')}
                    />
                    <label>Пациент</label>
                    <TextField
                        type="text"
                        variant="standard"
                        placeholder="Введите..."
                        fullWidth
                        {...register('patient')}
                    />
                    <label>Отделение</label>
                    <Controller
                        defaultValue="Введите"
                        render={({field:{onChange,value}})=>(
                            <Autocomplete
                                placeholder="Введите..."
                                options={department}
                                fullWidth
                                value={editData.department}
                                //isOptionEqualToValue={(option,value)=>option.label === editData.department}
                                onChange={(e,val)=>onChange(val.value)}
                                renderInput={(params)=>(
                                    <TextField {...params} label="Отделение"/>
                                )}
                            />
                        )}
                        name="department"
                        control={control}
                    />
                    {!editable &&
                    <>
                        <TextField
                            type="text"
                            placeholder="Введите состояние"
                            rows={5}
                            multiline
                            fullWidth
                            {...register('state')}
                        />
                    </>
                    }
                    <Button type="submit">
                        {editable ?  'Редактировать' : 'Добавить' }
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}


export default FormData