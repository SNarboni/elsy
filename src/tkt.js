function transforme() {
  var water = 1.5;
  var heart = 180;
  var temperature = 40;
  var steps = 50000;
  var resultHeart;
  var resultSteps;
  var resultTemp;
  var resultHST = 0;
  var resultWater = 1.5;

  if (heart > 120) {
    resultHeart = (heart - 120) * 0.0008;
    resultHST += resultHeart;
  }
  if (steps > 10000) {
    resultSteps = (steps - 10000) * 0.00002;
    resultHST += resultSteps;
  }
  if (temperature > 20) {
    resultTemp = (temperature - 20) * 0.02;
    resultHST += resultTemp;
  }

  resultWater += resultHST;

  console.log(resultHeart);
  console.log(resultSteps);
  console.log(resultTemp);
  console.log(resultHST);
  console.log(resultWater.toFixed(2));
}

transforme();
