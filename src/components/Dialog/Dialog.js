import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    IconButton
} from "@mui/material";
import {Close} from "@mui/icons-material";
import {AppContext} from "../../pages/Dashboard/Dashboard";


function CustomDialog({children}){
    const {open,setOpen} = React.useContext(AppContext)

    const onClose=()=>{
        setOpen(false)
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{m:0,p:2}}>
               <IconButton onClick={onClose}>
                   <Close/>
               </IconButton>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
export default CustomDialog