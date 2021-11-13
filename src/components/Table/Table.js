import {Table,Button} from "react-bootstrap";
import {useTable} from 'react-table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useMemo,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {actionDashboard} from "../../store/action/actionDashboard";


function TableContent(){
    const dispatch = useDispatch();
    const data = useSelector(state=>state.data)
    useEffect(()=>{
        dispatch(actionDashboard())
    },[])
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
            Cell:()=>(
                <>
                    <Button variant="primary">
                        <i className="bi bi-pencil-fill"/>
                    </Button>
                    <Button variant="primary">
                        <i className="bi bi-trash"/>
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
        prepareRow
    } = useTable({columns,data})
    return(
        <Table striped bordered hover {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column=>(
                                    <th {...column.getHeaderProps()}>
                                        {
                                            column.render('Header')
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
                </thead>
                <tbody {...getTableBodyProps()}>
                {
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
                }
                </tbody>
        </Table>
        )
}

export default TableContent