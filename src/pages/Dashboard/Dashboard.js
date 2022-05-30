import React, {useState} from "react";
import {Box, Container, Button, CssBaseline, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import EditModal from "../../components/Modal/EditModal";
import StateModal from "../../components/Modal/StateModal";
import TableContent from "../../components/Table/Table";
import AddModal from "../../components/Modal/AddModal";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import {deleteDashboard, getDashboard} from "../../store/action/actionDashboard";
import {getDepartment} from "../../store/action/actionDepartment";
import HeaderTableComponent from "../../components/Header/HeaderTableComponent/HeaderTableComponent";
import CustomDialog from "../../components/Dialog/Dialog";
import CommentsDialog from "../../components/CommentsDialog/CommentsDialog";
import {set} from "react-hook-form";


export const AppContext = React.createContext({})

function Dashboard(){
    const {setOpen} = React.useContext(AppContext)
    const dispatch = useDispatch()
    const data = useSelector(state=>state.dashboard.data);
    const [deleteId,setDeleteId] = React.useState(0)
    const [commentId,setCommentId] = React.useState(0)

    React.useEffect(()=>{
        if(!data.length){
            dispatch(getDashboard())
            dispatch(getDepartment())
        }
    },[])

    const onDeleteData=async()=>{
         await dispatch(deleteDashboard(deleteId))
         setOpen(false)
    }

    return (
            <Container>
                <CssBaseline/>
                <CustomDialog>
                    <div>
                        Вы действительно хотите удалить?
                        <Button color="primary" onClick={onDeleteData}>
                            Удалить
                        </Button>
                        <Button color="error" onClick={()=>setOpen(false)}>
                            Закрыть
                        </Button>
                    </div>
                </CustomDialog>
                <CommentsDialog
                    commentId={commentId}
                />
                    <TableContent
                        setCommentId={setCommentId}
                        setDeleteId={setDeleteId}
                        data={data}
                    />
            </Container>
    );
}


export default Dashboard