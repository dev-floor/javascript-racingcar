import carRaceStart from './carRace.js';

const racingCountSubmit = document.getElementById("racing-count-submit");
const racingCountInput = document.getElementById("racing-count-input");

let tryInput;

function handleRacingCount(event) {
    event.preventDefault();
    tryInput = racingCountInput.value;
    
    // car racing start.
    carRaceStart();
}

racingCountSubmit.addEventListener("click", handleRacingCount);

let makeRandomNumer = () => Math.floor(Math.random() * 9);

export {tryInput, makeRandomNumer};