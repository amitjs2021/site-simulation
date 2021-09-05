import React from "react";
import { Button, Grid } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";

const Actions = () => {
    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary" aria-label="Left Button" onClick={() => { console.log("left"); }}>
                        Left
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" aria-label="Right Button" onClick={() => { console.log("right"); }}>
                        Right
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" aria-label="Advance Button" onClick={() => { console.log("advance"); }}>
                        Advance
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" aria-label="Quit Button" onClick={() => { console.log("quit"); }}>
                        Quit
                    </Button>
                </Grid>

                <Grid item>
                    <Typography variant="h5" align="center" color="textPrimary">
                        A
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" align="center" color="textPrimary">
                        4
                    </Typography>
                </Grid>
                <Grid item>
                    <AddCircle aria-label="Add New Action" style={{ cursor: 'pointer' }} onClick={() => console.log("asdf")}></AddCircle>
                    <RemoveCircle aria-label="Remove Current Action" style={{ cursor: 'pointer' }} onClick={() => console.log("asdf")}></RemoveCircle>
                </Grid>
            </Grid>

        </>
    );
};

export default Actions;
