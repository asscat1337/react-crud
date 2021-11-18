import {useContext, useState} from 'react'
import {Modal,Button} from "react-bootstrap";
import AppContext from "../../hooks/context";
import theme from '../../styles/theme.module.scss'
import Form from '../Form/Form'

function AddModal({openAdd,setAddOpen}) {
    const {stateTheme} = useContext(AppContext)
    return(
        <Modal show={openAdd} onHide={()=>setAddOpen(false)}>
            <div className={stateTheme ? theme.themeModal  : ''}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h1>Добавить</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form/>
                </Modal.Body>
            </div>
        </Modal>
    )
}


export default AddModal