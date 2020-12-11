import {tryInput, makeRandomNumer} from './tryCount.js';
import {carArray} from './carMake.js';

const carGameResult = document.querySelector(".car-game-result");

let max;

export default function carRaceStart(){
    console.log(makeRandomNumer());
    console.log(tryInput);
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
        else{
            
        }
    })
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

