import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { UploadFile, Simulation } from "./components";

//react lazy to load component Asyn mode
//const Loader = React.lazy(() => import("./Loader"));

import "./styles/styles.css";

const App = () => {

  return (
    <>
      <UploadFile />
      <Simulation />
    </>
  );
};

export default hot(App);
