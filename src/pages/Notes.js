import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
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
            <Masonry
                breakpointCols={{
                    default: 3,
                    1100: 2,
                    700: 1
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
                >
                {notes.map((note) => {
                        return (
                            <div key={note.id}>
                                <NoteCard note={note} handleDelete={handleDelete}/>
                            </div>
                        );
                    })
                }
            </Masonry>
        </Container>
    );
}

export default Notes