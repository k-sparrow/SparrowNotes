import { ArchiveOutlined, CalendarViewDayOutlined, DeleteOutlined, MoreVertRounded } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardHeader, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { yellow, blue,  red } from "@mui/material/colors";
import { styled } from "@mui/system";
import React, { useState } from "react";

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

const NoteMenuActionIcons = ({anchorEl, onClickChoose, onClickClose, iconProps}) => {
    return (
        <>
            <IconButton
                aria-label="more"
                aria-haspopup="true"
                aria-controls="long-menu"
                onClick={onClickChoose}
            >
                <MoreVertRounded />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                onClose={onClickClose}
                open={Boolean(anchorEl)}
            >
                {iconProps.map((props) => {
                        return (
                            <MenuItem onClick={props.onClick} >
                                <ListItemIcon>
                                    {props.icon}
                                    <ListItemText>{props.text}</ListItemText>
                                </ListItemIcon>
                            </MenuItem>
                        );
                    })
                }
            </Menu>
        </>
    );
}

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
    const [anchorEl, setAnchorEl] = useState(null);

    const iconActionProps = {
        onClickChoose: (e) => setAnchorEl(e.currentTarget),
        onClickClose : (e) => setAnchorEl(null),
        anchorEl: anchorEl,
        iconProps: [
            {
                onClick: (e) => setAnchorEl(null),
                icon: <DeleteOutlined/>,
                text: "Delete"
            },
            {
                onClick: (e) => setAnchorEl(null),
                icon: <ArchiveOutlined/>,
                text: "Archive"
            }
        ]
    }

    return (
        <div>
            <StyledCard
                onClick={() => {setClicked(!clicked); setElevation(true);}}
                onMouseOver={() => setElevation(true)}
                onMouseOut={() => { if (!clicked) setElevation(false);}}
                raised
                noteColor={noteColor}
                clicked={clicked}
                elevation={elevation ? 10 : 1}
                >
                <CardHeader
                    action={
                        <NoteMenuActionIcons
                            onClickChoose={iconActionProps.onClickChoose}
                            onClickClose={iconActionProps.onClickClose}
                            anchorEl={iconActionProps.anchorEl}
                            iconProps={iconActionProps.iconProps}
                        />
                    }
                    avatar={
                        <Avatar>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    title={note.title}
                    subheader={note.category}
                    />

                <CardContent>
                    <Typography variant="body2">
                        {note.details}
                    </Typography>
                </CardContent>
            </StyledCard>
        </div>
    );
}


export default NoteCard;