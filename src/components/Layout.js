import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { format } from "date-fns";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

const StyledMainDiv = styled('div', {
    name: "StyledMainDiv",
    slot: "Wrapper",
})(({theme}) => {
    return ({
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: theme.spacing(6)
    });
});


const StyleMainTopBufferDiv = styled('div')(({theme}) => {
    return ({
        marginTop: theme.spacing(6)
    });
}) ;

function Layout({children}) {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        },
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Archive',
            icon: <ArchiveOutlinedIcon color="secondary" />,
            path: '/archive'
        }
    ]

    return (
        <div style={{display: 'flex', height: '100%'}}>
            <AppBar
                elevation={1}
                sx={{
                    width: (theme) => {return `calc(100% - ${theme.drawerWidth}px)`;},
                    color: 'black',
                    backgroundColor: 'white'
                }}>
                <Toolbar>
                    <Typography sx={{flexGrow: 1}}>
                        Today is the {format(new Date(), 'do MMMM y')}
                    </Typography>
                    <Typography>Dror</Typography>
                    <Avatar alt="M" src="/images/latino-male.png" sx={{marginLeft: 1, width: 36, height: 36, backgroundColor: '#f4f4f4'}}/>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                anchor="left"
                >

                <div >
                    <Typography variant="h5" sx={{padding: 2}}>
                        Sparrow Notes
                    </Typography>
                </div>

                <List>
                    {
                        menuItems.map(item => {
                            return (
                                <ListItem
                                    button
                                    key={item.text}
                                    onClick={() => navigate(item.path)}
                                    sx={  {
                                        backgroundColor: location.pathname == item.path ? "#f4f4f4" : null
                                     }}
                                    >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.text}</ListItemText>
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Drawer>

            <StyledMainDiv>
                <StyleMainTopBufferDiv />
                {children}
            </StyledMainDiv>
        </div>
    );
}

export default Layout;