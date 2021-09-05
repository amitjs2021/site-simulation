import React from "react";
import Typography from "@material-ui/core/Typography";
const SimulationEnd = () => {
  return (
    <>
      <Typography align="center" color="textSecondary" paragraph>
        The simulation has ended at your request. These are the, Simulation
        Result
      </Typography>
      <Typography variant="h5" align="center" color="textPrimary" paragraph>
        advance 4, turn right, quit
      </Typography>
    </>
  );
};

export default SimulationEnd;
