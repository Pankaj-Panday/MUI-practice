import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { RadioGroup } from "@mui/material";

const Create = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitleError(false);
        setDetailsError(false);

        if (title === "") {
            setTitleError(true);
        }
        if (details === "") {
            setDetailsError(true);
        }
        if (title && details) {
            console.log(title, details);
        }
    };

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
                color="textSecondary"
                sx={{
                    marginTop: 2,
                    marginBottom: 1.5,
                }}
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    label="Note Title"
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginTop: 1.5,
                        marginBottom: 1.5,
                    }}
                    error={titleError}
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                    label="Details"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    sx={{
                        marginBottom: 1.5,
                    }}
                    error={detailsError}
                />

                <RadioGroup>
                    <Radio value="Hello" />
                    <Radio value="Goodbye" />
                </RadioGroup>

                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Create;
