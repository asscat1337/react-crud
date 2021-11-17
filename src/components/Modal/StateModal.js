import {useEffect} from 'react'
import {Modal,Button} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import FormState from "../Form/FormState";
import {actionState} from "../../store/action/actionState";

function StateModal({stateOpen,setStateOpen,currentState}) {
    const dispatch = useDispatch();
    const state = useSelector(state=>state.dashboard.data.find(item=>item.dashboard_id === currentState));
    useEffect(()=>{
         if(!state.children.length){
            dispatch(actionState(currentState))
        }
    },[dispatch,currentState,stateOpen]);
        return(
            <Modal show={stateOpen} fullscreen onHide={()=>setStateOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>История состояния</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {state.children.map(item=>(
                        <div key={item.state_id}>{item.title}</div>
                    ))}
                    <FormState
                        currentState={currentState}
                    />
                    </Modal.Body>
            </Modal>
        )
}


export default StateModal