import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";
import { ACTIONS } from './Actions'

const ActionsButtons = ({ direction, dispatch, handleQuitAction, qAction }) => {
    return (
        <>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        aria-label="Left Button"
                        disabled={qAction}
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.LEFT,
                                payload: {
                                    id: direction.id,
                                    directionCount: +direction.directionCount,
                                    directionValue: "L",
                                    quit: false,
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
                        disabled={qAction}
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.RIGHT,
                                payload: {
                                    id: direction.id,
                                    directionCount: +direction.directionCount,
                                    directionValue: "R",
                                    quit: false,
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
                        disabled={qAction}
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.ADVANCE,
                                payload: {
                                    id: direction.id,
                                    directionCount: +direction.directionCount,
                                    directionValue: "A",
                                    quit: false,
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
                        onClick={() => {
                            handleQuitAction()
                        }
                        }
                    >
                        Quit
                    </Button>
                    {/* commenting dispatch way , I will use if required, idea is to broadcast quit event for all consumer elements wil be disabled.
                    <Button
                        variant="contained"
                        color="secondary"
                        aria-label="Quit Button"
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.QUIT,
                                payload: {
                                    id: direction.id,
                                    directionCount: direction.directionCount,
                                    directionValue: "Q",
                                    quit: true,

                                },
                            })
                        }
                    >
                        Quit
                    </Button> */}

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
                    {!qAction ? <AddCircle
                        aria-label="Add New Action"
                        style={{ cursor: "pointer" }}
                        color="primary"
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.ADD,
                                payload: { id: Math.random(Date.now()), directionValue: "", directionCount: 0 }
                            })
                        } /> : <AddCircle aria-label="Add New Action" color="disabled" />}
                    {!qAction ? <RemoveCircle
                        aria-label="Remove Current Action"
                        style={{ cursor: "pointer" }}
                        color="secondary"
                        onClick={() =>
                            dispatch({
                                type: ACTIONS.DELETE,
                                payload: { id: direction.id }
                            })
                        } /> : <RemoveCircle ria-label="Remove Current Action" color="disabled" />}
                </Grid>
            </Grid>
        </>
    );
};

export default ActionsButtons;
