import {cars} from './carMake.js';
import {max} from './carRace.js';

const carGameResult = document.querySelector(".car-game-result");

const COMMA_BLANK = 2;

// prints which car won the competition.
function printResult() {
    let stringResult = "";
    cars.forEach(function(car) {
        if(max == car.pathCount) {
            stringResult += `${car.name}, `;
        }
    })
    stringResult = stringResult.substring(0, stringResult.length - COMMA_BLANK);
    let newDiv = document.createElement("div");
    newDiv.innerText = `최종 우승자 : ${stringResult}`;
    carGameResult.appendChild(newDiv);
}

// prints racing status table.
function printRacing() {
    cars.forEach(function(car) {
        let newDiv = document.createElement("div");
        newDiv.innerText = `${car.name} : ${car.path}`;
        carGameResult.appendChild(newDiv);
    })
    let newBr = document.createElement("br");
    carGameResult.appendChild(newBr);
}

export {printResult, printRacing};