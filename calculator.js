//////////////Functions////////////////////////////////////////////////

function bmiCalc(weight, height) {
  const length = Math.pow(height, 2);
  const bmi = weight / length;
  let interpretation = 0;
  if (bmi <= 18.5) {
    return "Your BMI is " + Math.floor(bmi) + ", so you are underweight";
  }
  if (bmi > 18.5 && bmi < 24.9) {
    return "Your BMI is " + Math.floor(bmi) + ", so you have normal weight";
  }
  if (bmi > 24.9) {
    return "Your BMI is " + Math.floor(bmi) + ", so you are overweight";
  }
  interpretation = bmi;
  return interpretation;
}

////////////////////Main////////////////////////////////////////////
const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send("The result is = " + result);
});
app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function (req, res) {
  const weight = Number(req.body.weight);
  console.log("🚀 ~ file: calculator.js ~ line 42 ~ weight", weight);
  const height = Number(req.body.height);
  const result = bmiCalc(weight, height);
  console.log("🚀 ~ file: calculator.js ~ line 44 ~ result", result);
  res.send(result);
});
app.listen(3000, function () {
  const msg = "Server is started and running ";
  console.log("🚀 ~ file: calculator.js ~ line 10 ~ msg", msg);
});
var object = {};
