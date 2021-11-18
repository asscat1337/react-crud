import {Form} from "react-bootstrap";
import styles from './HeaderPage.module.scss'


function HeaderPage({setTheme,stateTheme}) {
    const onChangeTheme=()=>{
        setTheme(!stateTheme)
    }
    return (
        <div className={styles.header}>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="check this switch"
                    onChange={onChangeTheme}
                />
            </Form>
        </div>
    )
}


export default HeaderPage