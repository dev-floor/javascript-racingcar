import {hiddenInitView} from "./initialization.js";
import { inputCarName } from "./inputCarName.js";
import { inputCntNum } from "./inputCntNum.js";

export default class RacingCarGame {
 constructor() {
   this.init();
 }
 
 // 초기 세팅 - view 관리 (보여질 것과 가릴 것)
 init() {
   // 횟수와 결과 view는 처음에는 안보이게 처리.
  hiddenInitView();
  
  // 이후 처리될 이벤트들을 사용할 수 있게 바인딩 해주기. -> 이렇게 하게 될 경우 첫 화면에서 모든 js파일 불러오게 되니까 비효율 적이라고 생각.
  // 이렇게 안해주고 동적으로 불러와서 할 수 있는지???? 
  this.input();
 }
 
 input() {
  inputCarName();
  inputCntNum();
 }

 

}

new RacingCarGame();
