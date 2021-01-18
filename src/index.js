import {handleEnterName, handleSubmitName} from "../src/carName.js";
import {handleRacingCount} from "../src/tryCount.js";

export default class carRacingGameControl {
    constructor () {
        this.setCarNameEventListener();
        this.setTryInputEventListener();
    }

    setCarNameEventListener() {
        const carNameInput = document.getElementById("car-names-input");
        const carNameButton = document.getElementById("car-names-submit");
        carNameInput.addEventListener("keydown", handleEnterName);
        carNameButton.addEventListener("click", handleSubmitName);
    }
    
    setTryInputEventListener() {
        const racingCountSubmit = document.getElementById("racing-count-submit");
        racingCountSubmit.addEventListener("click", handleRacingCount);
    }
}

new carRacingGameControl();