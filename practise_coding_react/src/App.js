import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./Components/Header.js";
import UsingFunction from "./Components/UsingFunction";
import ArrowFunction from "./Components/ArrowFunction";
import UsingClass from "./Components/UsingClass";
import UsingUseState from "./Components/UsingUseState";

function App() {
  return (
    <React.Fragment>
      <h1>Welcome to react practise code session</h1>

      <Header />
      <UsingFunction />
      <ArrowFunction />
      <UsingClass />
      <UsingUseState />
    </React.Fragment>
  );
}

export default App;
