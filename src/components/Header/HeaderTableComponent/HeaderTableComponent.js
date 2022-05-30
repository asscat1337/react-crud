import React from 'react'
import {TextField,Button,Box} from "@mui/material";
import {Link} from "react-router-dom";

function HeaderTableComponent({globalFilter,setGlobalFilter}){
    return(
        <Box sx={{margin:'10px auto',display:'flex',alignItems:'center'}}>
            <TextField
                variant="standard"
                sx={{mb:2,mt:3}}
                value={globalFilter || ''}
                onChange={(e)=>setGlobalFilter(e.target.value)}
                placeholder="Введите запрос..."
                sx={{width:'85%'}}
            />
            <Link to="/add">
                <Button variant="contained">
                        Добавить
                </Button>
            </Link>
        </Box>
    )
}


export default HeaderTableComponent