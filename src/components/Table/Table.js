import {Table, Button} from "react-bootstrap";
import {useTable,useGlobalFilter,useSortBy} from 'react-table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useMemo,useEffect,useContext} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {actionDashboard,deleteData} from "../../store/action/actionDashboard";
import HeaderTableComponent from "../Header/HeaderTableComponent/HeaderTableComponent";
import AppContext from "../../hooks/context";
import Loading from "../Loading/Loading";
import theme from '../../styles/theme.module.scss'

function TableContent({setOpen,setCurrent,setStateModal,setCurrentState,setAddOpen}){
    const {stateTheme} = useContext(AppContext)
    console.log(stateTheme)
    const dispatch = useDispatch();
    const data = useSelector(state=>state.dashboard.data);
    const loading = useSelector(state=>state.dashboard.loading)
    useEffect(()=>{
        if(!data.length){
            dispatch(actionDashboard())
        }
    },[])

    const onDeleteData=(data)=>{
        dispatch(deleteData(data))
    }
    const showModal=(current)=>{
        setCurrent(current);
        setOpen(true)
    }
    const showStateModal=(current)=>{
        setStateModal(true);
        setCurrentState(current)
    }
    const columns = useMemo(()=>[
        {
            Header:'От кого',
            accessor: 'from'
        },
        {
            Header: 'Пациент',
            accessor: 'patient'
        },
        {
            Header:'Отделение',
            accessor:'department'
        },
        {
            Header:'Состояние',
            accessor: 'state'
        },
        {
            Header:()=>null,
            accessor:'push',
            Cell:({row})=>(
                <>
                    <Button variant="primary" onClick={()=>showModal(row.original.dashboard_id)}>
                        <i className="bi bi-pencil-fill"/>
                    </Button>
                    <Button variant="primary" onClick={()=>onDeleteData(row.original.dashboard_id)}>
                            <i className="bi bi-trash"/>
                    </Button>
                    <Button variant="primary" onClick={()=>showStateModal(row.original.dashboard_id)}>
                        <i className="bi bi-plus"/>
                    </Button>
                </>
            )
        }
    ],[])
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({columns,data},useGlobalFilter,useSortBy);
    const {globalFilter} = state;

    if(loading){
        return <Loading style={{"margin":"100px auto"}}/>
    }

    return(
        <>
        <HeaderTableComponent filter={globalFilter} setFilter={setGlobalFilter} setAddOpen={setAddOpen}/>
        <Table striped bordered hover={!stateTheme} {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column=>(
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className={stateTheme ? theme.darkTd : ''}
                                    >
                                        {
                                            column.render('Header')
                                        }
                                        <span>
                                            {column.isSorted ?
                                             column.isSortedDesc ?
                                                      ' 🔽'
                                                     : ' 🔼'
                                                 : ''
                                            }
                                        </span>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.length ? (
                        rows.map((row,i)=>{
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className={stateTheme ? theme.hoverTd  : ''}>
                                    {
                                        row.cells.map(cell=>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan="1000">Нет данных</td>
                        </tr>
                    )
                }
                </tbody>
        </Table>
            </>
        )
}

export default TableContent