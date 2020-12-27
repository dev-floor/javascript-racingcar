
import {showRacintCountContainerView} from "./view/countingContainer.js"
import {showResultContainerView} from "./view/resultContainer.js"

const carsNameInput = document.getElementById("car-names-input");
const carNameSubmitBtn = document.getElementById("car-names-submit");

function inputCarName() {
  carNameSubmitBtn.addEventListener('click', handleSubmit);
}

function handleSubmit() {
  validationCarName();
};

function validationCarName() {
  // input tag 값에 대한 유효성 체크 
  let inputStr = carsNameInput.value;
  let inputSplit = inputStr.split(',');
  let validationFlagValue = true;

  // 길이 체크
  for(let i in inputSplit) {
    if(inputSplit[i].length > 5) {
      alert('자동차 이름의 길이를 5자 이하로 해주세요.');
      validationFlagValue = false;
      break;
    }
  }
  
  // name 정상 입력시 하단 view 보여주기
  if(validationFlagValue) {
    showRacintCountContainerView();
    showResultContainerView();
  }
   
}

export {inputCarName};