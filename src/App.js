import React from "react";
import { hot } from "react-hot-loader/root";
import { UploadFile, Simulation } from "./components";

//react lazy to load component Asyn mode
//const Loader = React.lazy(() => import("./Loader"));

import "./styles/styles.css";

const App = () => {
  const state = {
    name: "amit",
  };
  return (
    <>
      <h1>hello from main </h1>
      <Simulation />
      {/* <UploadFile /> */}
      {/* `Hello test from react app asdfaaa111 helo ${state.name}`
      <React.Suspense fallback={null}>
        <Loader />
      </React.Suspense> */}
    </>
  );
};

export default hot(App);
