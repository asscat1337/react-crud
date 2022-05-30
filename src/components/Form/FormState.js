import {useDispatch}  from "react-redux";
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import {
    Box,
    TextField,
    Button
} from "@mui/material";
import {useParams} from "react-router-dom";
import React from "react";
import {addComments} from "../../store/action/actionState";
// import {addActionState} from "../../store/action/actionState";
// import {actionUpdateStateDashboard} from "../../store/action/actionDashboard";

function FormState({commentId}) {
    const dispatch = useDispatch()
    const schema = yup.object({
        state:yup.string()
    })

    const {register,handleSubmit,formState:{errors},reset} = useForm({
        resolver:yupResolver(schema)
    })

     const onClickData=async (data)=>{
        await dispatch(addComments({
            patient_id:commentId,
            title:data.state
        }))
        reset({})
     }
    return (
        <Box component="form" onSubmit={handleSubmit(onClickData)} sx={{display:'flex',flexDirection:'column'}}>
                <TextField
                    rows={4}
                    placeholder="Оставьте чего-нибудь(необязательно)"
                    {...register('state')}
                />
            <Button type="submit">
              Подтвердить
            </Button>
        </Box>
    )
}


export default FormState

