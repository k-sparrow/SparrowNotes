import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const StyledMainDiv = styled('div', {
    name: "StyledMainDiv",
    slot: "Wrapper"
})`
    width: 100%;
    background-color: #f9f9f9;
`;

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
                anchor="left"
                >

                <div>
                    <Typography variant="h5">
                        Ninja Notes
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
                                    sx={location.pathname == item.path ? {backgroundColor: "#f4f4f4"} : null}
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