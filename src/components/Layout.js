import { Drawer, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";


const StyledMainDiv = styled('div', {
    name: "StyledMainDiv",
    slot: "Wrapper"
})`
    width: 100%;
    background-color: #f9f9f9;
`;

function Layout({children}) {
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
            </Drawer>

            <StyledMainDiv>
                {children}
            </StyledMainDiv>
        </div>
    );
}

export default Layout;