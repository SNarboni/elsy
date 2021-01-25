import React from "react";
import "./App.css";
import Steps from "./components/Steps/Steps";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Steps />
          <p>Heart : {heartMin} </p>
          <p>Temperature : {tempMin}</p>
          <p>Heart : {stepsMin}</p>
        </div>
      </div>
    );
  }
}

export default App;
