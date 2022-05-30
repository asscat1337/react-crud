import React from 'react'
import dayjs from "dayjs";
import {Divider, List, ListItem, ListItemText,Paper} from "@mui/material";




function CommentsBlock({comments}){
    console.log(comments)
    return (
        <List>
            {comments?.map(comment=>(
                <ListItem key={comment?.state_id}>
                   <Paper elevation={3} sx={{display:'flex',flexDirection:'column',width:'850px'}}>
                      <span>{comment?.title}</span>
                       <span>

                           Дата создания:{dayjs(comment?.date).format('YYYY-MM-DD HH:mm:ss')}
                       </span>
                   </Paper>
                </ListItem>
            ))}
        </List>
    )
}

export default CommentsBlock