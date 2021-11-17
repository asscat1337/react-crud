import {Table, Button,Pagination} from "react-bootstrap";
import {useTable,useGlobalFilter,useSortBy} from 'react-table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useMemo,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {actionDashboard,deleteData} from "../../store/action/actionDashboard";
import Header from "../Header/Header";


function TableContent({setOpen,setCurrent,setStateModal,setCurrentState,setAddOpen}){
    const dispatch = useDispatch();
    const data = useSelector(state=>state.dashboard.data);
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
    return(
        <>
        <Header filter={globalFilter} setFilter={setGlobalFilter} setAddOpen={setAddOpen}/>
        <Table striped bordered hover {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column=>(
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                                <tr {...row.getRowProps()}>
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
                            <td>Нет данных</td>
                        </tr>
                    )
                }
                </tbody>
        </Table>
            </>
        )
}

export default TableContent