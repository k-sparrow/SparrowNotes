import { Component } from 'react';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem  } from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";

class NoteMenuActionIcons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        }
        this.state.onClickChoose = (e) => this.setState({anchorEl: e.currentTarget});
        this.state.onClickClose  = (e) => this.setState({anchorEl: null});
    }

    render() {
        return (
            <>
                <IconButton
                    aria-label="more"
                    aria-haspopup="true"
                    aria-controls="long-menu"
                    onClick={this.state.onClickChoose}
                >
                    <MoreVertRounded />
                </IconButton>
                <Menu
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    onClose={this.state.onClickClose}
                    open={Boolean(this.state.anchorEl)}
                >
                    {this.props.iconProps.map((props) => {
                            return (
                                <MenuItem key={props.text} onClick={(e) => {props.onClick(e); this.state.onClickClose(e);}} >
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
}

export default NoteMenuActionIcons;