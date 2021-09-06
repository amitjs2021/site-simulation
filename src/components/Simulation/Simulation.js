import React, { useState, useReducer, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/* local imports from here */
import ActionsButtons from "./ActionsButtons";
import Sitemap from "./Sitemap";
import SimulationEnd from "./SimulationEnd";
import { SimulateReducer, newDirections } from './SimulationReducer'

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
    const [directions, dispatch] = useReducer(SimulateReducer, [newDirections()]);
    const [qAction, setQAction] = useState(false);

    const handleQuitAction = () => {
        setQAction(true);
    };

    console.log(" inside componnet :: ", directions);


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
                            {directions.map((direction) => (
                                <ActionsButtons
                                    key={directions.id}
                                    dispatch={dispatch}
                                    direction={direction}
                                    handleQuitAction={handleQuitAction}
                                    qAction={qAction}

                                />
                            ))}
                        </div>
                    </Container>
                </div>
            </main>
            <footer>
                {qAction ? <SimulationEnd directions={directions} /> : <Typography align="center" color="textSecondary" paragraph> Simulation is in progress .....</Typography>}
            </footer>
        </>
    );
};

export default Simulation;
