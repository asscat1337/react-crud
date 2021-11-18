import {Spinner} from "react-bootstrap";


function Loading({style}){
    return (
        <div>
            <Spinner animation="border" style={style} role="status">
                <span className="visually-hidden">Загрузка...</span>
            </Spinner>
        </div>
    )
}


export default Loading