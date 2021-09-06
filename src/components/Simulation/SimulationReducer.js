import React from "react";
import { ACTIONS } from './Actions'

//@getCurrentState will return current updated  state
const getCurrentState = (events, action, type) => {
    return events.map((event) => {

        if (event.id === action.payload.id && action.payload.directionValue === type) {
            if (event.directionValue != action.payload.directionValue) {
                return {
                    ...event,
                    directionValue: action.payload.directionValue,
                    directionCount: 1,
                    quit: action.payload.quit
                };
            }
            return {
                ...event,
                directionValue: action.payload.directionValue,
                directionCount: action.payload.directionCount + 1,
            };
        }
        return event;
    });
};

export function newDirections() {
    return { id: Math.random(Date.now()), directionValue: "", directionCount: 0, quit: false };
}

/** Simulation reducer for state and action management */
export const SimulateReducer = (events, action) => {
    switch (action.type) {
        case ACTIONS.RIGHT:
            return getCurrentState(events, action, "R");
        case ACTIONS.LEFT:
            return getCurrentState(events, action, "L");
        case ACTIONS.ADVANCE:
            return getCurrentState(events, action, "A");
        case ACTIONS.QUIT:
            return getCurrentState(events, action, "Q");
        case ACTIONS.ADD:
            return [...events, newDirections()];
        case ACTIONS.DELETE:
            if (events.length > 1) {
                return events.filter(event => {
                    return event.id != action.payload.id
                })
            }
            return events
        default:
            return events;
    }
};

