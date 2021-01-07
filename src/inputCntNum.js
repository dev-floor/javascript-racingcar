import { startGame } from "./startGame.js";

const inputCarNames = document.getElementById("car-names-input");
const racingCountNumber = document.getElementById("racing-count-input");
const submitBtn = document.getElementById("racing-count-submit");

function handleSubmit() {
  let cars = inputCarNames.value.split(',');
  let count = racingCountNumber.value;

  startGame(cars, count);
}

function inputCntNum() {  
  submitBtn.addEventListener('click', handleSubmit);
}

export {inputCntNum};