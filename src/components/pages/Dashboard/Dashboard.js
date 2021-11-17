import {useState} from "react";
import EditModal from "../../Modal/EditModal";
import StateModal from "../../Modal/StateModal";
import TableContent from "../../Table/Table";
import AddModal from "../../Modal/AddModal";

function Dashboard(){
    const [open,setOpen] = useState(false);
    const [stateOpen,setStateOpen] = useState(false);
    const [currentState,setCurrentState] = useState(null)
    const [current,setCurrent] = useState(null);
    const [openAdd,setAddOpen] = useState(false);
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
            <AddModal
                openAdd={openAdd}
                setAddOpen={setAddOpen}
            />
            <h1>Hello</h1>
            <TableContent
                setOpen={setOpen}
                setAddOpen={setAddOpen}
                setCurrent={setCurrent}
                setStateModal={setStateOpen}
                setCurrentState={setCurrentState}

            />
        </div>
    );
}


export default Dashboard