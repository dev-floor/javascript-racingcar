import { raceStart } from "./race.js";
import {COMMA} from "./constant/constants.js"

const inputCarNames = document.getElementById("car-names-input");
const racingCountNumber = document.getElementById("racing-count-input");
const submitBtn = document.getElementById("racing-count-submit");

function handleSubmit() {
  let carNameArray = inputCarNames.value.split(COMMA);
  let count = racingCountNumber.value;

  raceStart(carNameArray, count);
}

function inputCntNum() {  
  submitBtn.addEventListener('click', handleSubmit);
}

export {inputCntNum};