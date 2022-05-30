import React from 'react'
import {
    Input,
    InputLabel,
    IconButton,
    InputAdornment,
    FormControl
} from "@mui/material";
import {VisibilityOff,Visibility} from "@mui/icons-material";


function InputPassword({showPassword,setShowPassword,value,onChange}){
    return (
        <>
            <InputLabel htmlFor="password">
                Пароль
            </InputLabel>
            <Input
                id="password"
                value={value || ""}
                onChange={newValue=>onChange(newValue)}
                required
                type={showPassword ? "text":"password"}
                margin="dense"
                fullWidth
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={()=>setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </>
    )
}

export default InputPassword