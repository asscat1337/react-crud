import React from 'react'
import {Slide} from "@mui/material";



const Transition=React.forwardRef((props,ref)=>{
    return <Slide direction="up" ref={ref} {...props}/>
})

export default Transition