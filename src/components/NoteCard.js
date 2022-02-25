import { ArchiveOutlined, CalendarTodayOutlined,  DeleteOutlined, } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader,  Typography } from "@mui/material";
import { yellow, blue,  red } from "@mui/material/colors";
import { styled } from "@mui/system";
import React, { Component } from "react";
import NoteMenuActionIcons from "./NoteMenuActionIcons";

const StyledCard = styled(Card, {name: "StyledCard", slot: "Wrapper"})
    (({noteColor, clicked, theme}) => {
        return ({
                border: `1px solid ${noteColor}`,
                backgroundColor: clicked ? noteColor : 'white',
                transition: "transform 0.15s ease-in-out",
                "&:hover" : { transform: "scale3d(1.075, 1.075, 1.0)" },

                ".MuiCardHeader-root": {
                        color: clicked ? 'white' : 'black',

                        ".MuiCardHeader-subheader": {
                            color: clicked ? 'white' : 'theme.pallette.secondary'
                        },

                        ".MuiAvatar-root": {
                            backgroundColor: clicked ? 'white' : noteColor,
                            color: !clicked ?  'white' : noteColor
                        }
                },

                ".MuiCardContent-root": {
                    color: clicked ?  'white' : "rgba(0,0,0,0.6)",
                    whiteSpace: 'pre-wrap'
                }
        });
    }
);

class NoteCard2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            elevation: false
        }

        this.noteColor = 'black';

        switch (this.props.note.category) {
            case "work":
                this.noteColor = yellow[600];
                break;

            case "personal":
                this.noteColor = blue[500];
                break;

            case "todo":
                this.noteColor = red[500];
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <StyledCard
                    onClick={() => {this.setState({clicked: !this.state.clicked, elevation: true});}}
                    onMouseOver={() => this.setState({elevation: true})}
                    onMouseOut={() => { if (!this.state.clicked) this.setState({elevation: false})}}
                    raised
                    noteColor={this.noteColor}
                    clicked={this.state.clicked}
                    elevation={this.state.elevation ? 10 : 1}
                    >
                    <CardHeader
                        action={
                            <NoteMenuActionIcons
                                iconProps={this.props.iconProps}
                            />
                        }
                        avatar={
                            <Avatar>
                                {this.props.note.category[0].toUpperCase()}
                            </Avatar>
                        }
                        title={this.props.note.title}
                        subheader={this.props.note.category}
                        />

                    <CardContent>
                        <Typography variant="body2">
                            {this.props.note.details}
                        </Typography>
                    </CardContent>
                </StyledCard>
            </div>
        );
    }
}


const NoteCard = ({note, handleDelete}) => {
    var iconActionProps = {
        iconProps: [
            {
                onClick: (e) => { handleDelete(note.id) },
                icon: <DeleteOutlined/>,
                text: " Delete"
            },
            {
                onClick: (e) => {},
                icon: <ArchiveOutlined/>,
                text: " Archive"
            }
        ]
    }

    if (note.category === "work") {
        iconActionProps.iconProps.push({
            onClick: (e) => {},
            icon: <CalendarTodayOutlined />,
            text: " Weekly"
        })
    }

    return (
        <div>
            <NoteCard2 iconProps={iconActionProps.iconProps} note={note} />
        </div>
    );
}


export default NoteCard;