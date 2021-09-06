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

/**
 * 
 * @return simulation component 
 * 
 */

/** Action Contant to generic use or central action are if any action change in future we don't need to do it all places */
export const ACTIONS = {
    RIGHT: 'Right',
    LEFT: 'Left',
    ADVANCE: 'Advance',
    QUIT: 'Quit',
    ADD: 'Add-Row',
    DELETE: 'Delete-Row',
}


const getCurrentState = (events, action, type) => {
    return events.map(event => {
        if (event.id === action.payload.id && action.payload.directionValue === type) {
            console.log("action.payload.directionCount : ", action.payload.directionCount < 1, "action.payload.directionCount : ", action.payload.directionCount)
            if (event.directionValue != action.payload.directionValue) {
                return { ...event, directionValue: action.payload.directionValue, directionCount: 1 }
            }
            return { ...event, directionValue: action.payload.directionValue, directionCount: action.payload.directionCount + 1 }
        }
        return event

    })
}


/** Simplutaion reducer for state and action management */
const simulateReducer = (events, action) => {
    console.log("events :::--- ", events)
    console.log("action in reducer :: ", action)

    switch (action.type) {
        case ACTIONS.RIGHT:
            return getCurrentState(events, action, 'R')
        //     return events.map(event => {
        //         if (event.id === action.payload.id && action.payload.directionValue === 'R') {
        //             console.log("action.payload.directionCount : ", action.payload.directionCount < 1, "action.payload.directionCount : ", action.payload.directionCount)
        //             if (event.directionValue != action.payload.directionValue) {
        //                 return { ...event, directionValue: action.payload.directionValue, directionCount: 1 }
        //             }
        //             return { ...event, directionValue: action.payload.directionValue, directionCount: action.payload.directionCount + 1 }
        //         }
        //         return event

        //     })
        case ACTIONS.LEFT:
            console.log("inside action left ")
            return getCurrentState(events, action, 'L')
        // return events.map(event => {
        //     if (event.id === action.payload.id && action.payload.directionValue === 'L') {
        //         if (event.directionValue != action.payload.directionValue) {
        //             return { ...event, directionValue: action.payload.directionValue, directionCount: 1 }
        //         }
        //         return { ...event, directionValue: action.payload.directionValue, directionCount: action.payload.directionCount + 1 }
        //     }
        //     return event
        // })
        case ACTIONS.ADVANCE:
            return getCurrentState(events, action, 'A')
        // return events.map(event => {
        //     if (event.id === action.payload.id && action.payload.directionValue === 'A') {
        //         if (event.directionValue != action.payload.directionValue) {
        //             return { ...event, directionValue: action.payload.directionValue, directionCount: 1 }
        //         }
        //         return { ...event, directionValue: action.payload.directionValue, directionCount: action.payload.directionCount + 1 }
        //     }
        //     return event

        // })
        case ACTIONS.QUIT:
            return event
        case ACTIONS.ADD:
            return [...event, newDirections()]
        default:
            return events

    }

}





function newDirections() {
    return { id: Math.random(Date.now()), directionValue: '', directionCount: 0 };
}

const Simulation = (props) => {
    const classes = useStyles();
    const [directions, dispatch] = useReducer(simulateReducer, [newDirections(), newDirections()])
    const [qAction, setQAction] = useState(false)

    console.log(" inside componnet :: ", directions)


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
                            {directions.map(direction => <Actions key={directions.id} dispatch={dispatch} direction={direction} />)}
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
