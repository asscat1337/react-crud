import React from 'react'
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    List,
    ListItemText,
    ListItem,
    TextField,
    Button
} from "@mui/material";
import {Close} from "@mui/icons-material";
import Transition from "./Transition";
import {AppContext} from "../../pages/Dashboard/Dashboard";
import CommentsBlock from "./CommentsBlock";
import {useSelector} from "react-redux";
import FormState from "../Form/FormState";


function CommentsDialog({commentId}){
    const {openComments,setOpenComments} = React.useContext(AppContext)
    const comments = useSelector(state=>state?.dashboard?.data?.find(item=>item.dashboard_id === commentId))


    return (
        <Dialog
            open={openComments}
            fullScreen
            TransitionComponent={Transition}
        >
            <AppBar sx={{position:'static'}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={()=>setOpenComments(false)}
                    >
                        <Close/>
                    </IconButton>
                </Toolbar>
            </AppBar>
           <CommentsBlock
            comments={comments?.children}
           />
            <FormState
                commentId={commentId}
            />
        </Dialog>
    )
}


export default CommentsDialog