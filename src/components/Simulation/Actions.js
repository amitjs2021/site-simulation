import React from "react";
import { Button, Grid } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import ACTIONS from './Simulation'




const Actions = ({ dispatch, direction }) => {
    console.log("action ::: ", direction)
    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button variant="contained" color="primary" aria-label="Left Button" onClick={() => dispatch({ type: "Left", payload: { id: direction.id, directionCount: +direction.directionCount, directionValue: "L" } })}>
                        Left
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" aria-label="Right Button" onClick={() => dispatch({ type: "Right", payload: { id: direction.id, directionCount: +direction.directionCount, directionValue: "R" } })}>
                        Right
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" aria-label="Advance Button" onClick={() => dispatch({ type: "Advance", payload: { id: direction.id, directionCount: +direction.directionCount, directionValue: "A" } })}>
                        Advance
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="secondary" aria-label="Quit Button" onClick={() => dispatch({ type: "Quit", payload: { id: direction.id, directionCount: +direction.directionCount, directionValue: "Q" } })}>
                        Quit
                    </Button>
                </Grid>

                <Grid item>
                    <Typography variant="h5" align="center" color="textPrimary">
                        {direction.directionValue}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" align="center" color="textPrimary">
                        {direction.directionCount}
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
