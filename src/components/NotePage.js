import React, { Component } from "react";
import { ArchiveOutlined, DeleteOutlined } from "@mui/icons-material";
import { Container } from "@mui/material";
import Masonry from "react-masonry-css";
import NoteCard from "../components/NoteCard";
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';

class NotesPage extends Component {
    rel_uri;
    page_uri;
    site_uri;

    constructor(props) {
        super(props);

        this.base_uri = 'http://localhost:8000';
        this.rel_uri = 'notes';
        this.page_db_uri = [this.base_uri, this.rel_uri].join('/');


        this.state = {
            notes: []
        }

        this.iconProps = [
            {
                onClick: this.handleDelete.bind(this),
                icon: <DeleteOutlined />,
                text: "Delete"
            }
        ]
    }

    async componentDidMount() {
        await fetch(this.page_db_uri)
                .then(rsp => rsp.json())
                .then(data => this.setState({ notes: data }));
    }

    async handleDelete(id) {
        // delete the note from the notes column
        await fetch([this.page_db_uri, id].join('/'), { method: 'DELETE' });

        // update the notes view
        const newNotes = this.state.notes.filter((note) => note.id != id);
        this.setState({notes: newNotes});
    }

    render() {
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
                    {this.state.notes.map((note) => {
                            return (
                                <div key={note.id}>
                                    <NoteCard note={note} iconProps={this.iconProps}/>
                                </div>
                            );
                        })
                    }
                </Masonry>
            </Container>
        );
    }
}

class MainNotesPage extends NotesPage {
    constructor(props) {
        super(props);

        this.archive_uri = 'archive';
        this.archive_db_uri = [this.base_uri, this.archive_uri].join('/');


        this.iconProps.push(...[
            {
                onClick: this.handleSendToArchive.bind(this),
                icon: <ArchiveOutlined />,
                text: 'Archive'
            }
        ]);
    }

    async handleSendToArchive(id) {
        // get the data from the notes column before deleting
        var data = await fetch([this.page_db_uri, id].join('/'))
                         .then(rsp => rsp.json());
        delete data.id;

        // delete the note from the notes column
        await fetch([this.page_db_uri, id].join('/'), { method: 'DELETE' });

        // push the note into the archive column
        await fetch(this.archive_db_uri, {
            method: 'POST',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify(data)
        });

        // update the notes view
        const newNotes = this.state.notes.filter((note) => note.id != id);
        this.setState({notes: newNotes});
    }
}


class ArchiveNotesPage extends NotesPage {
    constructor(props) {
        super(props);

        this.rel_uri = 'archive';
        this.page_db_uri = [this.base_uri, this.rel_uri].join('/');

        this.restore_uri = 'notes';
        this.restore_db_uri = [this.base_uri, this.restore_uri].join('/');

        this.iconProps.push(...[
            {
                onClick: this.handleRestoreToNotes.bind(this),
                icon: <RestoreFromTrashOutlinedIcon />,
                text: "Restore"
            }
        ]);
    }

    async handleRestoreToNotes(id) {
        // get the data from the notes column before deleting
        var data = await fetch([this.page_db_uri, id].join('/'))
                         .then(rsp => rsp.json());
        delete data.id;

        // delete the entry in the DB
        this.handleDelete(id);

        // push the entry back to the restored DB colum
        await fetch(this.restore_db_uri, {
            method: 'POST',
            headers: {'Content-type': "application/json"},
            body: JSON.stringify(data)
        });
    }
}
export { NotesPage, MainNotesPage, ArchiveNotesPage };
