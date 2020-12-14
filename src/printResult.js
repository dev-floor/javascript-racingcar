import {carArray} from './carMake.js';
import {max} from './carRace.js';

const carGameResult = document.querySelector(".car-game-result");

// prints which car won the competition.
function printResult(){
    let stringTmp = "";
    carArray.forEach(function(car){
        if(max == car.pathCount){
            stringTmp += `${car.name}, `;
        }
    })
    stringTmp = stringTmp.substring(0, stringTmp.length-2);
    let divTmp = document.createElement("div");
    divTmp.innerText = `최종 우승자 : ${stringTmp}`;
    carGameResult.appendChild(divTmp);
}

// prints racing status table.
function printRacing(){
    carArray.forEach(function(car){
        let divTmp = document.createElement("div");
        divTmp.innerText = `${car.name} : ${car.path}`;
        carGameResult.appendChild(divTmp);
    })
    let br = document.createElement("br");
    carGameResult.appendChild(br);
}

export {printResult, printRacing};