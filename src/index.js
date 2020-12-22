import {hiddenInitView} from "./initialization.js";

export default class RacingCarGame {
 constructor() {
   this.init();
 }
 
 // 초기 세팅 - view 관리 (보여질 것과 가릴 것)
 init() {
   // 횟수와 결과 view는 처음에는 안보이게 처리.
  hiddenInitView();
 }
}

new RacingCarGame();
