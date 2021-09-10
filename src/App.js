import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { UploadFile, Simulation } from "./components";
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
