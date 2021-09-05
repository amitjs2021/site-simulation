import React, { useState, useReducer, useEffect } from "react";
import { Button, Grid, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

/* local import from here */
import Actions from "./Actions";
import Sitemap from "./Sitemap";
import SimulationEnd from "./SimulationEnd";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    simulationContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    actonButton: {
        marginTop: theme.spacing(4),
    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const Simulation = (props) => {
    const classes = useStyles();

    return (
        <>
            <main>
                <div className={classes.simulationContent}>
                    <Container maxWidth="sm">
                        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
                            Simulation Session
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Welcome to the Aconex site clearing simulator. This is a map of
                            the site:
                        </Typography>
                        <Sitemap />

                        <div className={classes.actonButton}>
                            <Actions />
                            <Actions />
                            <Actions />
                            <Actions />
                        </div>
                    </Container>
                </div>
            </main>
            <footer>
                <SimulationEnd />
            </footer>
        </>
    );
};

export default Simulation;
