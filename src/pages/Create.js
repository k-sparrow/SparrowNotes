import { KeyboardArrowRight } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import React from "react";


function Create() {

    return (
        <Container>
            <Typography component="h2" variant="h6" color="textSecondary" gutterBottom>
                Create a new Note
            </Typography>
            <Button
                variant="contained"
                type="submit"
                color="secondary"
                onClick={() => console.log("You clicked me!")}
                endIcon={<KeyboardArrowRight />}
            >
                Submit
            </Button>
        </Container>
    );
}

export default Create;