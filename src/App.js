import React from "react";
import "./App.css";
import Box from "./components/Box/Box";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

export class App extends React.Component {
  data = [
    { icon: "local_drink", color: "#3A85FF", value: 1.5, unit: "L" },
    {
      icon: "directions_walk",
      color: "black",
      value: 3000,
      unit: "steps",
    },
    { icon: "favorite", color: "red", value: 120, unit: "bpm" },
    { icon: "wb_sunny", color: "yellow", value: -10, unit: "°C" },
  ];

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.data.map(function (element) {
            return (
              <Box
                icon={element.icon}
                color={element.color}
                value={element.value}
                unit={element.unit}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
