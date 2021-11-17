import {useEffect} from 'react'
import {Modal,Button} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import FormState from "../Form/FormState";
import {actionState} from "../../store/action/actionState";
import Form from '../Form/Form'

function AddModal({openAdd,setAddOpen}) {
    // const dispatch = useDispatch();
    // useEffect(()=>{
    //     if(!state.children.length){
    //         dispatch(actionState(currentState))
    //     }
    // },[dispatch,currentState,stateOpen]);
    return(
        <Modal show={openAdd} fullscreen onHide={()=>setAddOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h1>Добавить</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form/>
            </Modal.Body>
        </Modal>
    )
}


export default AddModal