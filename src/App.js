import React from "react";
import "./App.css";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <Title title="Probando React" />
      <Subtitle text="By: Daniel Quispe" />
      <Button text="Touch me!" />
    </div>
  );
}

export default App;
