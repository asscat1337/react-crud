import React from 'react'
import {Container,Paper} from "@mui/material";
import {useParams} from "react-router-dom";
import FormData from "../../components/Form/Form";
import {useSelector} from "react-redux";



function Edit(){
    const params = useParams()

    const findData = useSelector((state)=>state.dashboard.data.find(item=>item.dashboard_id === +params.id))


    return (
        <Container>
            <Paper>
                Страница редактирования
                <FormData
                    editData={findData}
                    id={params.id}
                />
            </Paper>
        </Container>
    )
}

export default Edit
