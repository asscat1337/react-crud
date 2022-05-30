import React from 'react'
import {useTable,useGlobalFilter,useSortBy} from 'react-table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useSelector,useDispatch} from 'react-redux'
import {actionDashboard, getComments} from "../../store/action/actionDashboard";
import {
    TableContainer,
    IconButton,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Paper, Box, Typography
} from "@mui/material";
import {Edit,Delete,ExpandMore} from "@mui/icons-material";
import Loading from "../Loading/Loading";
import "./Table.scss"
import {AppContext} from "../../pages/Dashboard/Dashboard";
import {Link} from "react-router-dom";
import HeaderTableComponent from "../Header/HeaderTableComponent/HeaderTableComponent";

function TableContent({setDeleteId,data,commentId,setCommentId}){
    const dispatch = useDispatch()
    const {setOpen,setEditable,setOpenComments} = React.useContext(AppContext)
    const loading = useSelector(state=>state?.dashboard?.loading)

    const onDeleteData=(data)=>{
        setDeleteId(data)
        setOpen(true)
    }
    const showStateModal=async(current)=>{
        setOpenComments(true)
        await dispatch(getComments(current))
        setCommentId(current)

    }
    const columns = React.useMemo(()=>[
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
            accessor: 'state',
            Cell:({row})=>(
                <>
                <div className="modified">
                    <span>Последняя дата:{row.original.last_state_update}</span>
                </div>
                </>
            )
        },
        {
            Header:'Действия',
            accessor:'push',
            Cell:({row})=>(
                <>
                    <IconButton variant="primary" onClick={()=>setEditable(true)}>
                        <Link to={`/edit/${row.original.dashboard_id}`}>
                            <Edit/>
                        </Link>
                    </IconButton>
                    <IconButton variant="primary" onClick={()=>onDeleteData(row.original.dashboard_id)}>
                            <Delete/>
                    </IconButton>
                    <IconButton variant="primary" onClick={()=>showStateModal(row.original.dashboard_id)}>
                       <ExpandMore/>
                    </IconButton>
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
        <Box>
        <HeaderTableComponent globalFilter={globalFilter} setGlobalFilter={setGlobalFilter}/>
            {data.length ? (
                <TableContainer component={Paper}>
                    <Table {...getTableProps()}>
                        <TableHead>
                            {
                                headerGroups.map(headerGroup=>(
                                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                                        {
                                            headerGroup.headers.map(column=>(
                                                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                                                </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))
                            }
                        </TableHead>
                        <TableBody {...getTableBodyProps()}>
                            {
                                rows.map((row,i)=>{
                                    prepareRow(row)
                                    return (
                                        <TableRow {...row.getRowProps()}>
                                            {
                                                row.cells.map(cell=>{
                                                    return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                                                })
                                            }
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            ):(
                <Typography component="h6">
                    Нет данных 😔
                </Typography>
            )}
        </Box>
        )
}

export default TableContent