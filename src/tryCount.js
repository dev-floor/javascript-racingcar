import { constants } from '../constantValues/constants.js';
import carRaceStart from './carRace.js';

const racingCountInput = document.getElementById("racing-count-input");

let tryInput;

function handleRacingCount(event) {
    event.preventDefault();
    tryInput = racingCountInput.value;
    
    // car racing start.
    carRaceStart();
}

const makeRandomNumer = () => Math.floor(Math.random() * constants.RANDOM_NUMBER_LIMIT);

export {tryInput, makeRandomNumer, handleRacingCount};