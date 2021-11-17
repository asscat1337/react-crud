import {Button, FormControl, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


function Header({filter,setFilter}){
    return(
        <InputGroup className="mb-3">
            <FormControl
                value={filter || ''}
                onChange={(e)=>setFilter(e.target.value)}
                placeholder="Введите запрос..."
            />
            <Button variant="outline-primary">
                <Link to="/add">Добавить</Link>
            </Button>
        </InputGroup>
    )
}


export default Header