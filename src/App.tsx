import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FunctionExample } from "./components/functionExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FunctionExample name="fatmina" type="jalaali" />
      </header>
    </div>
  );
}

export default App;
