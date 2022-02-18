import {  DeleteOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import React from "react";



const NoteCard = ({note, handleDelete}) => {
    return (
        <div>
            <Card
                elevation={2}
                sx={{
                    border: () => {
                        var border_value = '1px solid';
                        var border_color;
                        switch(note.category) {
                            case "work":     border_color = 'yellow'; break;
                            case "personal": border_color = 'blue';   break;
                            case "todo":     border_color = 'green';  break;
                            default:         border_color = 'black';  break;
                        }

                        return [border_value, border_color].join(' ');
                    }
                }}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                    />

                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}


export default NoteCard;