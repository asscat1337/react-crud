import {useDispatch}  from "react-redux";
import {useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import {FloatingLabel,Form,Button} from 'react-bootstrap'
import {addActionState} from "../../store/action/actionState";
import {actionUpdateStateDashboard} from "../../store/action/actionDashboard";

function FormState({currentState,style}) {
    const dispatch = useDispatch()
    const schema = yup.object({
        state:yup.string()
    })
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        resolver:yupResolver(schema)
    })
    const onClickData=(data)=>{
        dispatch(addActionState({
            patient_id:currentState,
            title:data.state
        }))
        dispatch(actionUpdateStateDashboard(
            {
                patient_id:currentState,
                title:data.state
            }
        ))
        reset({})
    }
    return (
        <Form onSubmit={handleSubmit(onClickData)} style={style}>
            <FloatingLabel label="Оставьте..." controlId="floatingTextarea1">
                <Form.Control
                    {...register('state')}
                    as="textarea"
                    placeholder="Оставьте чего-нибудь(необязательно)"

                />
                <Button
                    variant="primary"
                    type="submit"
                >
                    Подтвердить
                </Button>
            </FloatingLabel>
        </Form>
    )
}


export default FormState

