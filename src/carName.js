import {makeCarObject} from './carMake.js';
import {message} from "../constantValues/message.js"; 
import { constants } from '../constantValues/constants.js';

const carNameInput = document.getElementById("car-names-input");

let inputNames = "";
let nameTokens = [];
let acceptableName = false;

function handleEnterName(event) {
    if(event.keyCode == constants.ENTER_KEY) {
        //event.preventDefault();
        inputNames = carNameInput.value;
        nameTokens = inputNames.split(constants.COMMA);
        validationName();
    }
}

function handleSubmitName() {
    inputNames = carNameInput.value;
    nameTokens = inputNames.split(constants.COMMA);
    validationName();
}

function validationName() {
    acceptableName = nameTokens.some(carName => carName.length > constants.CAR_MINIMUM_LENGTH )
    acceptableName ? alert(message.CAR_NAME_LENGTH_INAPPROPRIATE) : makeCarObject();
}

export {nameTokens, acceptableName, handleEnterName, handleSubmitName};