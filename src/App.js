import React from "react";
import { hot } from "react-hot-loader/root";

//react lazy to load component Asyn mode
const Loader = React.lazy(() => import("./Loader"));

import "./styles.css";
const App = () => {
  const state = {
    name: "amit",
  };
  return (
    <>
      `Hello test from react app asdfaaa111 helo ${state.name}`
      <React.Suspense fallback={null}>
        <Loader />
      </React.Suspense>
    </>
  );
};

export default hot(App);
