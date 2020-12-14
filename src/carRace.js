import {tryInput, makeRandomNumer} from './tryCount.js';
import {carArray} from './carMake.js';
import {printResult, printRacing} from './printResult.js';

const carGameResult = document.querySelector(".car-game-result");

let max;

export default function carRaceStart(){
    for(let i = 0 ; i < tryInput ; i++){
        carMove();
        printRacing();
    }
    max = maximumCount();
    printResult();
}

// adding string "-"
function carMove(){
    carArray.forEach(function(car){
        let randonNumTmp = makeRandomNumer();
        if(randonNumTmp >= 4){
            // move forward.
            car.path += "-";
            car.pathCount++;
        }
    })
}

// calculate maximum pathCount.
function maximumCount(){
    let tmp = -1;
    carArray.forEach(function(car){
        if(tmp < car.pathCount){
            tmp = car.pathCount;
        }
    })
    return tmp;
}

export {max};
