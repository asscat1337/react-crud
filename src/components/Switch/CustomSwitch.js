import React from "react";
import {Switch,styled,FormControlLabel} from "@mui/material";




function CustomSwitch({onChange,checked}){

    const ThemeSwitch=styled(Switch)(({theme})=>({
        width:55,
        height:26,
        padding:0,
        '& .MuiSwitch-switchBase':{
            padding:0,
            margin:3,
            transitionDuration:'600ms',
            '&.Mui-checked':{
                transform:'translateX(24px)',
                color:'#ffffff',
                '& + .MuiSwitch-track':{
                    background:theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity:1,
                    border:0
                },
                '.Mui-disable + .MuiSwitch-track':{
                    opacity: 0.5
                }
            },
            '&.Mui-focusVisible .MuiSwitch-thumb':{
                color:'#33cf4d',
                border:'6px solid #ffffff'
            },
            '&.Mui-disabled .MuiSwitch-thumb':{
                color:theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
            },
            '&.Mui-disabled + .MuiSwitch-track':{
                opacity:theme.palette.mode === 'light' ? 0.7:0.3
            },
        },
        '& .MuiSwitch-thumb':{
            boxSizing:'border-box',
            width:22,
            height:22
        },
        '& .MuiSwitch-track': {
                borderRadius:26/2,
                backgroundColor:theme.palette.mode === 'light' ? '#e9e9ea' : '#39393D',
                opacity:1,
                transition:theme.transitions.create(['background-color'],{
                    duration:500
                }),
            '&:before, &:after': {
                content: '""',
                position: 'absolute',
                top: '41%',
                transform: 'translateY(-50%)',
                width: 16,
                height: 16,
            },
            '&:before': {
                content:'"🌞"',
                left: 8,
            },
            '&:after': {
                content:'"🌚"',
                right: 8,
            },
        },
    }))


    return (
        <FormControlLabel
            control={
                <ThemeSwitch
                    onChange={onChange}
                    checked={checked}
                />
            }/>
    )
}

export default CustomSwitch