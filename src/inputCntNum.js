import { inputCarName } from "./inputCarName.js";
import { startGame } from "./startGame.js";

const carsNameInput = document.getElementById("car-names-input");
const cntNum = document.getElementById("racing-count-input");

function inputCntNum() {  
  const countingBtn = document.getElementById("racing-count-submit");
  countingBtn.addEventListener('click', handleSubmit);
}

function handleSubmit() {
  // game Start
  startGame(carsNameInput.value.split(','), cntNum.value);
}

export {inputCntNum};