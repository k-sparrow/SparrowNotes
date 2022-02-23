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
        // get the data from the notes column before deleting
        var data = await fetch('http://localhost:8000/notes/' + id)
                         .then(rsp => rsp.json());
        delete data.id;

        // delete the note from the notes column
        await fetch('http://localhost:8000/notes/' + id, { method: 'DELETE' });

        // push the note into the archive column
        await fetch('http://localhost:8000/archive/', {
            method: 'POST',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify(data)
        });

        // update the notes view
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