import {useState,useContext} from 'react'
import { useSelector } from 'react-redux'
import {Modal,Button} from 'react-bootstrap'
import FormData from '../Form/Form'
import AppContext from "../../hooks/context";
import theme from '../../styles/theme.module.scss'

function EditModal({open,setOpen,current}){
    const {stateTheme} = useContext(AppContext)
  const data = useSelector(state=>state.dashboard.data.find(item=>item.dashboard_id===current))
  const [editable] = useState(true)
    return (
        <>  
        <Modal show={open} onHide={()=>setOpen(false)}>
            <div className={stateTheme === 'dark' ? theme.themeModal : ''}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Редактирование
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <FormData
                            editable={editable}
                            current={data}
                        />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setOpen(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </div>
        </Modal>
      </>
    )
}


export default EditModal