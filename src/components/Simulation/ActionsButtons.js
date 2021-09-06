import React from "react";
import { Button, Grid } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { ACTIONS } from './Actions'

const ActionsButtons = ({ direction, dispatch }) => {
    console.log("action ::: ", direction);
    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        aria-label="Left Button"
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.LEFT,
                                payload: {
                                    id: direction.id,
                                    directionCount: +direction.directionCount,
                                    directionValue: "L",
                                },
                            })
                        }
                    >
                        Left
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        aria-label="Right Button"
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.RIGHT,
                                payload: {
                                    id: direction.id,
                                    directionCount: +direction.directionCount,
                                    directionValue: "R",
                                },
                            })
                        }
                    >
                        Right
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        aria-label="Advance Button"
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.ADVANCE,
                                payload: {
                                    id: direction.id,
                                    directionCount: +direction.directionCount,
                                    directionValue: "A",
                                },
                            })
                        }
                    >
                        Advance
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        aria-label="Quit Button"
                        onClick={() =>
                            console.log("quict")
                        }
                    >
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
                    <AddCircle
                        aria-label="Add New Action"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.ADD,
                                payload: { id: Math.random(Date.now()), directionValue: "", directionCount: 0 }
                            })
                        }
                    ></AddCircle>
                    <RemoveCircle
                        aria-label="Remove Current Action"
                        style={{ cursor: "pointer" }}

                        onClick={() =>
                            dispatch({
                                type: ACTIONS.DELETE,
                                payload: { id: direction.id }
                            })
                        }
                    ></RemoveCircle>
                </Grid>
            </Grid>
        </>
    );
};

export default ActionsButtons;