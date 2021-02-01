import {hiddenRacingCountContainerView} from "./view/countingContainer.js"
import {hiddenResultContainerView} from "./view/resultContainer.js"
import { inputCarName } from "./inputCarName.js";
import { inputCntNum } from "./inputCntNum.js";

export default class RacingCarGame {
 constructor() {
   this.init();
   this.input();
 }
 
 init() {
  hiddenRacingCountContainerView();
  hiddenResultContainerView();
 }
 
 input() {
  inputCarName();
  inputCntNum();
 }
}

new RacingCarGame();
