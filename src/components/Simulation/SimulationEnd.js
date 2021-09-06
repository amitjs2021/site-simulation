import React from "react";
import Typography from "@material-ui/core/Typography";
/**
 * 
 * @returns Return final simulation result, only visible after simulation ends.
 */
const SimulationEnd = ({ directions }) => {

  const directionKeys = {
    'L': 'Turn Left',
    'R': 'Turn Right',
    'A': 'Advanced'
  }

  return (
    <>
      <Typography align="center" color="textSecondary" paragraph>
        The simulation has ended at your request. These are the, Simulation
        Result
      </Typography>
      <Typography variant="h5" align="center" color="textPrimary" paragraph>
        {directions.map(item => {
          return (
            directionKeys[item.directionValue] + ' ' + item.directionCount + ' '
          )
        })}
      </Typography>
    </>
  );
};
// advance 4, turn right, quit

export default SimulationEnd