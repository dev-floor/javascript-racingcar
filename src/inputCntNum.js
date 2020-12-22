import { inputCarName } from "./inputCarName.js";
import { startGame } from "./startGame.js";

function inputCntNum() {
  const num = document.getElementById("racing-count-submit");
  num.addEventListener('click', handleSubmit);

  function handleSubmit() {
    // 입력 범위에 대한 조건이 있다면 넣어주고
    
    // game Start
    startGame();
  }
}

export {inputCntNum};