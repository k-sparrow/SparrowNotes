import { Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";



function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
        .then(rsp => rsp.json())
        .then(data => setNotes(data));
    }, []);

    return (
        <Container>
            <Grid container>
                {notes.map((note) => {
                        return (
                            <Grid key={note.id} item xs={12} sm={6} lg={4}>
                                <Paper>
                                    <p >{note.title}</p>
                                </Paper>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
}

export default Notes