import {useState,useContext} from "react";
import {useSelector} from "react-redux";
import EditModal from "../../components/Modal/EditModal";
import StateModal from "../../components/Modal/StateModal";
import TableContent from "../../components/Table/Table";
import AddModal from "../../components/Modal/AddModal";
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import AppContext from "../../hooks/context";
import theme from '../../styles/theme.module.scss';

function Dashboard(){
    const loading = useSelector(state=>state.dashboard.loading);
    const [open,setOpen] = useState(false);
    const [stateTheme,setStateTheme] = useState(false)
    const [stateOpen,setStateOpen] = useState(false);
    const [currentState,setCurrentState] = useState(null)
    const [current,setCurrent] = useState(null);
    const [openAdd,setAddOpen] = useState(false);
    return (
        <AppContext.Provider value={{stateTheme}}>
            <div className={`App ${stateTheme ? theme.dark : theme.light}`}>
                {!loading &&
                <HeaderPage
                    setTheme={setStateTheme}
                    stateTheme={stateTheme}
                />
                }
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
                {!loading && <h1>Hello</h1>}
                <TableContent
                    setOpen={setOpen}
                    setAddOpen={setAddOpen}
                    setCurrent={setCurrent}
                    setStateModal={setStateOpen}
                    setCurrentState={setCurrentState}

                />
            </div>
        </AppContext.Provider>
    );
}


export default Dashboard