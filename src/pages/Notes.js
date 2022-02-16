import { Container } from "@mui/material";
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
        {notes.map((note) => {
                return (
                    <p key={note.id}>{note.title}</p>
                );
            })
        }
        </Container>
    );
}

export default Notes