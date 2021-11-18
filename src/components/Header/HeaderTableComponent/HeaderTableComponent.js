import {Button, FormControl, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


function HeaderTableComponent({filter,setFilter,setAddOpen}){
    const onClickButton =()=>{
        setAddOpen(true)
    }
    return(
        <InputGroup className="mb-3">
            <FormControl
                value={filter || ''}
                onChange={(e)=>setFilter(e.target.value)}
                placeholder="Введите запрос..."
            />
            <Button variant="outline-primary" onClick={onClickButton}>
                Добавить
            </Button>
        </InputGroup>
    )
}


export default HeaderTableComponent