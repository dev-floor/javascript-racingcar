import { showView } from "./initialization.js";

function inputCarName() {
  // car name을 입력받고 validation 체크
  const carsNameInput = document.getElementById("car-names-input");
  const carNameSubmitBtn = document.getElementById("car-names-submit");
  
  
  carNameSubmitBtn.addEventListener('click', handleSubmit);

  function handleSubmit() {
    validationCarName();
  };


  function validationCarName() {
    // input tag 값에 대한 유효성 체크 
    // 이상 있을 때 alert 경고.
    // 정상이라면
    showView();
  }
}

export {inputCarName};