
import {showRacingCountContainerView} from "./view/countingContainer.js"
import {showResultContainerView} from "./view/resultContainer.js"

const inputCarNames = document.getElementById("car-names-input");
const submitBtn = document.getElementById("car-names-submit");
const MAX_NAME_LENGTH_LIMIT = 5;

function handleSubmit() {
  validationCarName();
};

function inputCarName() {
  submitBtn.addEventListener('click', handleSubmit);
}

function validationCarName() {
  let cars = inputCarNames.value.split(',');
  let nameValidation = true;

  cars.forEach((carName) => carName.length > MAX_NAME_LENGTH_LIMIT ? nameValidation = false : nameValidation = true)

  nameValidation ? printNextView() : alert('자동차 이름의 길이를 5자 이하로 해주세요.');
  
}

function printNextView() {
  showRacingCountContainerView();
  showResultContainerView();
}

export {inputCarName};