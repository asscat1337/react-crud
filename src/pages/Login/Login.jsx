import React from 'react'
import {useDispatch,useSelector}  from "react-redux";
import {useForm,Controller} from "react-hook-form";
import {useNavigate,useLocation} from 'react-router-dom'
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {
    Button,
    TextField,
    Box,
    Typography,
    Container, Avatar
} from "@mui/material";
import InputPassword from "../../components/Inputs/InputPassword/InputPassword";
import {LockOutlined} from "@mui/icons-material";

import {login} from "../../store/action/actionAuth";

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth.isAuth)
    const [showPassword,setShowPassword] = React.useState(false)
    const schema = yup.object().shape({
        login:yup.string().required('Поле должно быть заполнено'),
        password:yup.string().required('Поле должно быть заполнено')
    })

    const {handleSubmit,register,control,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })
    const submitForm = async (data)=>{
      try{
          const {payload} = await dispatch(login(data))
          localStorage.setItem('token',payload.token)
      }catch (e) {
          console.log(e)
      }
      finally {
          navigate('/dashboard')
      }
    }
    return (
        <Container>
            <Box sx={{
                marginTop:8,display:"flex",
                justifyContent:"center",
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Avatar>
                    <LockOutlined/>
                </Avatar>
                <Typography component="h5">
                    Авторизация
                </Typography>
                <Box component="form" noValidate sx={{mt:1}} onSubmit={handleSubmit(submitForm)}>
                    <TextField
                        variant="standard"
                        label="Логин"
                        margin="normal"
                        fullWidth
                        required
                        {...register('login')}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({field:{value,onChange}})=>(
                            <InputPassword
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <Button
                        sx={{
                            mt:2,
                            mb:2
                        }}
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        Авторизация
                    </Button>
                </Box>
            </Box>
        </Container>
        // <div className={styles.login}>
        //     <div className={styles.formWrapper}>
        //         <Form onSubmit={handleSubmit(submitForm)}>
        //             <Form.Group className="mb-3">
        //                 <Form.Label>Логин</Form.Label>
        //                 <Form.Control
        //                     {...register('login')}
        //                     type="text"
        //                     placeholder="Введите логин"
        //                 />
        //                 <p>{errors.login?.message}</p>
        //             </Form.Group>
        //             <Form.Group className="mb-3">
        //                 <Form.Label>Пароль</Form.Label>
        //                 <Form.Control
        //                     {...register('password')}
        //                     type={checkPassword ? "text" :"password"}
        //                     placeholder="Введите пароль"/>
        //                     <p>{errors.password?.message}</p>
        //                 <Form.Check type="checkbox" label="Показать пароль" onClick={onCheckPassword}/>
        //             </Form.Group>
        //             <Button
        //                 variant="primary"
        //                 type="submit">
        //                 Авторизация
        //             </Button>
        //         </Form>
        //     </div>
        // </div>

    )
}


export default Login