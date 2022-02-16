import { Container, Drawer, Typography } from "@mui/material";
import React from "react";

const drawerWidth = 240;

const classes = {
    page: {
        background: '#f9f9f9',
        width: '100%',
    },

    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    }
}

function Layout({children}) {
    return (
        <div>
            <Drawer
                sx={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper}}
                >

                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>
            </Drawer>

            <Container sx={classes.page} maxWidth='false'>
                {children}
            </Container>
        </div>
    );
}

export default Layout;