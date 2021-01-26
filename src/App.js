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
  water = { icon: "local_drink", color: "#3A85FF", value: 1.5, unit: "L" };
  steps = {
    icon: "directions_walk",
    color: "black",
    value: 3000,
    unit: "steps",
  };
  heart = { icon: "favorite", color: "red", value: 120, unit: "bpm" };
  temperature = { icon: "wb_sunny", color: "yellow", value: -10, unit: "°C" };

constructor(props) {
  super(props);
  this.state = {
    water : 0,
    heart : 120,
    temperature : -10,
    steps : 3000,
    // calculateWater: (),
    onHeartChange: (value) => { return this.setState({ heart: value.target.value }) },
    onStepsChange: (value) => { return this.setState({ steps: value.target.value }) },
    onTemperatureChange: (value) => { return this.setState({ temperature: value.target.value }) },
  }
}

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box {...this.water}/>
          {/* steps */}
          <Box {...this.steps} onChange={this.state.onStepsChange} value={this.state.steps} max={stepsMax} min={stepsMin} />
          {/* heart */}
          <Box {...this.heart} onChange={this.state.onHeartChange} value={this.state.heart} min={heartMin} max={heartMax}/>
          {/* temperature */}
          <Box {...this.temperature} onChange={this.state.onTemperatureChange} value={this.state.temperature} min={tempMin} max={tempMax}/>
        </div>
      </div>
    );
  }
}

export default App;
