import {hiddenRacingCountContainerView} from "./view/countingContainer.js"
import {hiddenResultContainerView} from "./view/resultContainer.js"
import { inputCarName } from "./inputCarName.js";
import { inputCntNum } from "./inputCntNum.js";

export default class RacingCarGame {
 constructor() {
   this.init();
 }
 
 init() {
  hiddenRacingCountContainerView();
  hiddenResultContainerView();

  this.input();
 }
 
 input() {
  inputCarName();
  inputCntNum();
  // 위의 값들에서 Return 값을 받아오고
  // this.gameStart(param1, param2)로 하는 게 맞나?
 }
}

new RacingCarGame();
