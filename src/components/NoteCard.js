import {  DeleteOutlined } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { yellow, blue,  red } from "@mui/material/colors";
import React, { useState } from "react";



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

    const [clicked, setClicked] = useState(false);
    const [elevation, setElevation] = useState(false);
    return (
        <div>
            <Card
                onClick={() => {setClicked(!clicked); setElevation(true);}}
                onMouseOver={() => setElevation(true)}
                onMouseOut={() => { if (!clicked) setElevation(false);}}
                raised
                elevation={elevation ? 10 : 1}
                sx={ () => { return {
                    border: () => {return clicked ? '1px solid white': `1px solid ${noteColor}`},
                    backgroundColor: clicked ? noteColor : 'white',
                    transition: "transform 0.15s ease-in-out",
                    "&:hover": {transform: "scale3d(1.075, 1.075, 1.0)"}
                }}}>
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined/>
                        </IconButton>
                    }
                    avatar={
                        <Avatar sx={{
                            backgroundColor: clicked ? 'white' : noteColor,
                            color: !clicked ?  'white' : noteColor

                        }}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    title={note.title}
                    subheader={note.category}
                    sx={{
                            color: clicked ?  'white' : 'black'
                    }}
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