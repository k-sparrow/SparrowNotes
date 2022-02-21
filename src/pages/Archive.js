import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import NoteCard from "../components/NoteCard";

const Archive = (props) => {
    const [archive, setArchive] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/archive')
        .then(rsp => rsp.json())
        .then(data => setArchive(data));
    }, []);

    const handleDelete = async (id) => {
        // delete the note from the notes column
        await fetch('http://localhost:8000/archive/' + id, { method: 'DELETE' });

        // update the notes view
        const newArchive = archive.filter((note) => note.id != id);
        setArchive(newArchive);
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
                {archive.map((note) => {
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

export default Archive;