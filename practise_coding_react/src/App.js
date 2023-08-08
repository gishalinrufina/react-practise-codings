import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./Components/Header.js";
import UsingFunction from "./Components/UsingFunction";
import ArrowFunction from "./Components/ArrowFunction";

function App() {
  return (
    <React.Fragment>
      <h1>Welcome to react practise code session</h1>

      <Header />
      <UsingFunction />
      <ArrowFunction />
    </React.Fragment>
  );
}

export default App;
