import { createTheme } from '@mui/material';

const drawerWidth = 240;

const mainTheme = createTheme({
    drawerWidth: drawerWidth,
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