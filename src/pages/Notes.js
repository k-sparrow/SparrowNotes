import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";



function Notes() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/notes')
        .then(rsp => rsp.json())
        .then(data => setNotes(data));
    }, []);

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, { method: 'DELETE' });

        const newNotes = notes.filter((note) => note.id != id);
        setNotes(newNotes);
    }
    return (
        <Container>
            <Grid container spacing={3}>
                {notes.map((note) => {
                        return (
                            <Grid key={note.id} item xs={12} sm={6} lg={4}>
                                <NoteCard note={note} handleDelete={handleDelete}/>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
}

export default Notes