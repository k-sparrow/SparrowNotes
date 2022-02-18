import { createTheme } from '@mui/material';
import React from 'react';

const drawerWidth = 240;

const mainTheme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                root: {
                    width: drawerWidth
                },
                paper: {
                    width: drawerWidth
                }
            }
        },
    }
});

export default mainTheme;