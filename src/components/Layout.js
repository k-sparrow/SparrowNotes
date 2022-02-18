import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


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

function Layout({children}) {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/Create'
        }
    ]
    return (
        <div style={{display: 'flex', height: '100%'}}>
            <Drawer
                variant="permanent"
                // anchor="left"
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
                {children}
            </StyledMainDiv>
        </div>
    );
}

export default Layout;