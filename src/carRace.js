import {tryInput, makeRandomNumer} from './tryCount.js';
import {cars} from './carMake.js';
import {printResult, printRacing} from './printResult.js';

const carGameResult = document.querySelector(".car-game-result");
const RANDOM_STD = 4;

let max;

export default function carRaceStart() {
    for(let i = 0 ; i < tryInput ; i++) {
        carMove();
        printRacing();
    }
    max = maximumCount();
    printResult();
}

// adding string "-"
function carMove() {
    cars.forEach(function(car) {
        let randonNumTmp = makeRandomNumer();
        if(randonNumTmp >= RANDOM_STD) {
            // move forward.
            car.path += "-";
            car.pathCount++;
        }
    })
}

// calculate maximum pathCount.
function maximumCount() {
    let compare = -1;
    cars.forEach(function(car) {
        if(compare < car.pathCount) {
            compare = car.pathCount;
        }
    })
    return compare;
}

export {max};
