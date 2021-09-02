import React from "react";
import { hot } from "react-hot-loader/root";
import "./styles.css";

const App = () => {
  const state = {
    name: "amit",
  };
  return `Hello test from react app asdfaaa111 helo ${state.name}`;
};

export default hot(App);
