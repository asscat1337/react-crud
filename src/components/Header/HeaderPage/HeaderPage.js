import React from 'react'
import {AppBar, Box, Button, Typography, IconButton, Toolbar, CssBaseline} from "@mui/material";
import {Logout} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {logoutUser} from "../../../store/reducer/authReducer";
import CustomSwitch from "../../Switch/CustomSwitch";
import {AppContext} from "../../../pages/Dashboard/Dashboard";

function HeaderPage() {
    const navigate = useNavigate()
    const {setDarkState,darkState} = React.useContext(AppContext)
    const fio = useSelector(state=>state?.auth?.user?.fio)

    const onLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }

    const onChangeTheme = ()=>{
         localStorage.setItem('theme',darkState ? 'light':'dark')
        setDarkState(!darkState)
    }

    return (
       <Box sx={{flexGrow:1}}>
           <CssBaseline/>
           <AppBar position="static">
               <Toolbar>
                   <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                       {fio}
                   </Typography>
                   <CustomSwitch
                    onChange={onChangeTheme}
                    checked={darkState}
                   />
                   <IconButton
                       size="large"
                       edge="end"
                       color="inherit"
                       sx={{mr:2}}
                       onClick={onLogout}
                   >
                       <Logout/>
                   </IconButton>
               </Toolbar>
           </AppBar>
       </Box>
    )
    // const fio = sessionStorage.getItem('fio');
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const logout=()=>{
    //     sessionStorage.removeItem('token');
    //     sessionStorage.removeItem('isAuth');
    //     dispatch(logoutUser());
    //     navigate('/')
    // }
    // const onChangeTheme=()=>{
    //     localStorage.setItem('theme',stateTheme==='light' ? 'dark' : 'light');
    //     setTheme(localStorage.getItem('theme'))
    // }
    // return (
    //     <div className={styles.header}>
    //             <BootstrapSwitchButton
    //                 size="sm"
    //                 onstyle="light"
    //                 offstyle="light"
    //                 checked={stateTheme !== 'dark'}
    //                 onlabel='🌚'
    //                 offlabel='🌞'
    //                     onChange={onChangeTheme}
    //             />
    //             <div className={styles.fio}>{fio}</div>
    //             <Button variant="primary" onClick={logout} className={styles.btn}>Выход</Button>
    //     </div>
    // )
}


export default HeaderPage