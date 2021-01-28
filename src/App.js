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
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,

      onHeartChange: (value) => {
        this.setState({ heart: value.target.value });
        this.calculateWater();
      },
      onStepsChange: (value) => {
        this.setState({ steps: value.target.value });
        this.calculateWater();
      },
      onTemperatureChange: (value) => {
        this.setState({ temperature: value.target.value });
        this.calculateWater();
      },
    };
  }

  incrementSteps = () => {
    let incre = this.state.steps;
    if (incre === stepsMax) {
      return;
    } else {
      incre += 1000;
      this.setState({ steps: incre });
      this.calculateWater();
    }
  };

  decrementSteps = () => {
    let decre = this.state.steps;
    if (decre === stepsMin) {
      return;
    } else {
      decre -= 1000;
      this.setState({ steps: decre });
      this.calculateWater();
    }
  };

  calculateWater = () => {
    let resultHeart = 0;
    let resultSteps = 0;
    let resultTemp = 0;
    let resultHST = 0;
    let resultWater = 1.5;

    if (this.state.heart > 120) {
      resultHeart = (this.state.heart - 120) * 0.0008;
      resultHST += resultHeart;
    }
    if (this.state.steps > 10000) {
      resultSteps = (this.state.steps - 10000) * 0.00002;
      resultHST += resultSteps;
    }
    if (this.state.temperature > 20) {
      resultTemp = (this.state.temperature - 20) * 0.02;
      resultHST += resultTemp;
    }

    resultWater += resultHST;
    return this.setState({ water: resultWater.toFixed(2) });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* water */}
          <Box {...this.water} value={this.state.water} />
          {/* steps */}
          <Box
            {...this.steps}
            onChange={this.state.onStepsChange}
            value={this.state.steps}
            max={stepsMax}
            min={stepsMin}
            retire={this.decrementSteps}
            ajoute={this.incrementSteps}
          />
          {/* heart */}
          <Box
            {...this.heart}
            onChange={this.state.onHeartChange}
            value={this.state.heart}
            min={heartMin}
            max={heartMax}
          />
          {/* temperature */}
          <Box
            {...this.temperature}
            onChange={this.state.onTemperatureChange}
            value={this.state.temperature}
            min={tempMin}
            max={tempMax}
          />
        </div>
      </div>
    );
  }
}

export default App;
