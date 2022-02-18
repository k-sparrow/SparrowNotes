import {  DeleteOutlined } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { yellow, blue,  red } from "@mui/material/colors";
import React from "react";



const NoteCard = ({note, handleDelete}) => {
    var noteColor = 'black';
    switch (note.category) {
        case "work":
            noteColor = yellow[600];
            break;

        case "personal":
            noteColor = blue[500];
            break;

        case "todo":
            noteColor =  red[500];
            break;
        default:
            break;
    }

    return (
        <div>
            <Card
                elevation={2}
                sx={{
                    border: `1px solid ${noteColor}`
                }}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    avatar={
                        <Avatar sx={{
                            backgroundColor: noteColor
                        }}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    title={note.title}
                    subheader={note.category}
                    />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" sx={{whiteSpace: 'pre-wrap'}}>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}


export default NoteCard;