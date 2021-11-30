import {useEffect,useContext} from 'react'
import {Modal,Button} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import FormState from "../Form/FormState";
import {actionState} from "../../store/action/actionState";
import styles from './StateModal.module.scss'
import theme from '../../styles/theme.module.scss'
import AppContext from "../../hooks/context";
import dayjs from "dayjs";

function StateModal({stateOpen,setStateOpen,currentState}) {
    const {stateTheme} = useContext(AppContext)
    const dispatch = useDispatch();
    const state = useSelector(state=>state.dashboard.data.find(item=>item.dashboard_id === currentState));
    useEffect(()=>{
         if(!state.children.length){
            dispatch(actionState(currentState))
        }
    },[dispatch,currentState,stateOpen]);
        return(
            <Modal show={stateOpen} fullscreen onHide={()=>setStateOpen(false)} dialogClassName={styles.modal}>
                <div className={stateTheme==='dark' ? theme.themeModal : ''}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>История состояния</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles.states}>
                    {state.children.map(item=>(
                        <div key={item.state_id} className={styles.state}>
                            <div>Состояние:{item.title}</div>
                            <div>Дата:{dayjs(item.date).format('YYYY-MM-DD')}</div>
                        </div>
                    ))}
                    </div>
                    <FormState
                        style={{background:'transparent'}}
                        currentState={currentState}
                    />
                    </Modal.Body>
                </div>
            </Modal>
        )
}


export default StateModal