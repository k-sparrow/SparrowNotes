import { KeyboardArrowRight } from "@mui/icons-material";
import { Button,  Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const classes = {
    field: {
        marginTop: 2,
        marginBottom: 2,
        display: 'block'
    }
}

function Create() {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(true);
    const [detailsError, setDetailsError] = useState(true);
    const radioControls = [
        {
            value: "todo",
            label: "Todo",
            id: 1
        },

        {
            value: "personal",
            label: "Personal",
            id: 2
        },

        {
            value: "work",
            label: "Work",
            id: 2
        }
    ]

    const [category, setCategory] = useState(radioControls[0].value);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title) {
            setTitleError(false);
        } else setTitleError(true);

        if (details) {
            setDetailsError(false);
        } else setDetailsError(true);

        if( title && details) {
            console.log(title, details);
        }
    }
    return (
            <Container>
                <Typography component="h2" variant="h6" color="textSecondary" gutterBottom>
                    Create a new Note
                </Typography>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        onChange={(event) => {
                            setTitle(event.target.value)
                            if (title) setTitleError(false);
                            else       setTitleError(true);
                        }}
                        variant="outlined"
                        label="Note Title"
                        required
                        fullWidth
                        error={titleError}
                        sx={classes.field} />

                    {/*  */}
                    <TextField
                        onChange={(event) => {
                            setDetails(event.target.value)
                            if (details) setDetailsError(false);
                            else         setDetailsError(true);
                        }}
                        variant="outlined"
                        label="Details"
                        multiline
                        rows={4}
                        fullWidth
                        required
                        error={detailsError}
                        sx={classes.field} />

                    <FormControl sx={classes.field}>
                        <FormLabel>Note Category</FormLabel>
                        <RadioGroup  value={category} sx={{ marginBottom: 1}} onChange={(event) => setCategory(event.target.value)}>
                            {
                                radioControls.map(({value, label, id}) => {
                                    return (
                                        <FormControlLabel key={id} value={value} label={label} control={<Radio />}/>
                                    );
                                })
                            }
                        </RadioGroup>
                    </FormControl>


                    <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        endIcon={<KeyboardArrowRight />}
                    >
                        Submit
                    </Button>
                </form>
            </Container>
    );
}

export default Create;