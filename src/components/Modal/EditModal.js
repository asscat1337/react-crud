import {useState} from 'react'
import { useSelector } from 'react-redux'
import {Modal,Button} from 'react-bootstrap'
import FormData from '../Form/Form'

function EditModal({open,setOpen,current}){
  const data = useSelector(state=>state.data.find(item=>item.dashboard_id===current))
  const [editable] = useState(true)
    return (
        <>  
        <Modal show={open} onHide={()=>setOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
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
            {/* <Button variant="primary" onClick={()=>setOpen(false)}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </>
    )
}


export default EditModal