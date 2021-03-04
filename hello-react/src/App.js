import logo from "./logo.svg";
import "./App.css";
import React, { useState, Component } from "react";
import Average from "./js/Average";

/*const App = () => {
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : 16
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
  return <ValidationSample />;
};*/

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const App = () => {
  return <Average />;
};

export default App;
