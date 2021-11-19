import {useContext} from 'react';
import {useDispatch} from "react-redux";
import {deleteData} from "../../store/action/actionDashboard";
import AppContext from "../../hooks/context";
import {Modal,Button} from 'react-bootstrap';
import theme from '../../styles/theme.module.scss'

function ConfirmModal({confirmModal,setConfirmModal}){
    const dispatch = useDispatch();
    const {confirmData,setConfirmData,stateTheme} = useContext(AppContext);
    const onClickConfirm =()=>{
        dispatch(deleteData(confirmData));
        setConfirmData(null);
        setConfirmModal(false);
    };
    return(
        <Modal show={confirmModal} onHide={setConfirmModal}>
            <div className={stateTheme === 'dark'? theme.themeModal : ''}>
                <Modal.Header>Подтверждение</Modal.Header>
                <Modal.Body>
                    Вы действительно хотите удалить?
                    <div>
                        <Button variant="primary"
                                onClick={()=>setConfirmModal(false)}
                        >
                            Закрыть
                        </Button>
                        <Button variant="success" onClick={onClickConfirm}>
                            Удалить
                        </Button>
                    </div>
                </Modal.Body>
            </div>
        </Modal>
    )
}



export default ConfirmModal