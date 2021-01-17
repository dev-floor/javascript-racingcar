import makeCarObject from './carMake.js';
import {message} from "../constantValues/message.js"; 
import { constants } from '../constantValues/constants.js';

const carNameInput = document.getElementById("car-names-input");

// contains what user input. (Total)
let inputNames = "";

// contains names that is sliced by ",".
let nameTokens = [];

// judge if after "validationName()", it is acceptable car names or not.
let acceptableName = false;

// when pressed Enter key.
function handleEnterName(event) {
    if(event.keyCode == constants.ENTER_KEY) {
        //event.preventDefault();
        inputNames = carNameInput.value;
        nameTokens = inputNames.split(constants.COMMA);
        validationName();
    }
}

// when clicked "확인" button.
function handleSubmitName() {
    inputNames = carNameInput.value;
    nameTokens = inputNames.split(constants.COMMA);
    validationName();
}

// go through if input car names are acceptable. check its validation
function validationName() {
    acceptableName = nameTokens.some(carName => carName.length > constants.CAR_MINIMUM_LENGTH )
    acceptableName ? alert(message.CAR_NAME_LENGTH_INAPPROPRIATE) : makeCarObject();
}

export {nameTokens, acceptableName, handleEnterName, handleSubmitName};