import makeCarObject from './carMake.js'

const carNameInput = document.getElementById("car-names-input");
const carNameButton = document.getElementById("car-names-submit");

// contains what user input. (Total)
let inputNames = "";

// contains names that is sliced by ",".
let nameTokens = [];

// judge if after "validationName()", it is acceptable car names or not.
let acceptableName = false;

const ENTER_KEY = 13;
const COMMA = ",";

// when pressed Enter key.
function handleEnterName(event) {
    if(event.keyCode == ENTER_KEY) {
        event.preventDefault();
        inputNames = carNameInput.value;
        nameTokens = inputNames.split(COMMA);
        validationName();
    }
}

carNameInput.addEventListener("keydown", handleEnterName);

// when clicked "확인" button.
function handleSubmitName() {
    inputNames = carNameInput.value;
    nameTokens = inputNames.split(COMMA);
    validationName();
}

carNameButton.addEventListener("click", handleSubmitName)

// go through if input car names are acceptable. check its validation
function validationName() {
    nameTokens.forEach(carName => carName.length > 5 ? (acceptableName = false) : (acceptableName = true))
    acceptableName ? makeCarObject() : alert(`Car name should be less than 5. Input again.`);
}

export {nameTokens, acceptableName};