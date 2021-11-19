import {useState,useContext} from "react";
import {useSelector} from "react-redux";
import EditModal from "../../components/Modal/EditModal";
import StateModal from "../../components/Modal/StateModal";
import TableContent from "../../components/Table/Table";
import AddModal from "../../components/Modal/AddModal";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import AppContext from "../../hooks/context";
import theme from '../../styles/theme.module.scss';

function Dashboard(){
    const loading = useSelector(state=>state.dashboard.loading);
    const [confirmModal,setConfirmModal] = useState(null);
    const [confirmData,setConfirmData] = useState(null); // состояние текущего id для удаления
    const [open,setOpen] = useState(false); // состояние модалки редактирования
    const [stateTheme,setStateTheme] = useState(localStorage.getItem('theme'))
    const [stateOpen,setStateOpen] = useState(false); // состояние модалки состояния
    const [currentState,setCurrentState] = useState(null) // id текущего состояния
    const [current,setCurrent] = useState(null); // id текущей записи
    const [openAdd,setAddOpen] = useState(false); // состояние  добавления модалки
    return (
        <AppContext.Provider value={{stateTheme,confirmData,setConfirmData}}>
            <div className={`App ${stateTheme === 'dark' ? theme.dark : theme.light}`}>
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
                <ConfirmModal
                    confirmModal={confirmModal}
                    setConfirmModal={setConfirmModal}
                />
                {!loading && <h1>Hello</h1>}
                <TableContent
                    setOpen={setOpen}
                    setAddOpen={setAddOpen}
                    setCurrent={setCurrent}
                    setStateModal={setStateOpen}
                    setCurrentState={setCurrentState}
                    setConfirmModal={setConfirmModal}

                />
            </div>
        </AppContext.Provider>
    );
}


export default Dashboard