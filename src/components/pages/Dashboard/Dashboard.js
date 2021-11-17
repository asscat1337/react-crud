import {useState} from "react";
import EditModal from "../../Modal/EditModal";
import StateModal from "../../Modal/StateModal";
import TableContent from "../../Table/Table";


function Dashboard(){
    const [open,setOpen] = useState(false);
    const [stateOpen,setStateOpen] = useState(false);
    const [currentState,setCurrentState] = useState(null)
    const [current,setCurrent] = useState(null);
    return (
        <div className="App">
            <EditModal
                open={open}
                setOpen={setOpen}
                current={current}
            />
            {stateOpen &&
            <StateModal
                stateOpen={stateOpen}
                setStateOpen={setStateOpen}
                currentState={currentState}
            />
            }

            <h1>Hello</h1>
            <TableContent
                setOpen={setOpen}
                setCurrent={setCurrent}
                setStateModal={setStateOpen}
                setCurrentState={setCurrentState}
            />
        </div>
    );
}


export default Dashboard