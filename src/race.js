import Car from "./car.js";

let cars = [];
let winnerArray = [];
const RACE_CONDITION_NUMBER = 4;
const COMMA = ', ';
const COMMA_BLANK = 2;
function raceStart(carNameArray, count) {
  makeCarObj(carNameArray);

  for(let i=0;i<count;i++) {
    racing();
    raceStatePrint();
  }

  selectWinner();
  printWinner();
}

function makeCarObj(carNameArray) {
  carNameArray.forEach((carName) => {
    let car = new Car(carName);

    cars.push(car);
  });
}

const makeRandomNumber = () => {
  return Math.floor(Math.random()*9);
}

function racing() {
  for(let car in cars) {
    let raceConditionNum = makeRandomNumber();
    
    if(raceConditionNum >= RACE_CONDITION_NUMBER) cars[car].cnt++;
  }
}

const makePath = (car) => {
  let path = '';
  if(car.cnt) {
    for(let i=0;i<car.cnt;i++) path = path + '-';
  }
  return path;
}

function raceStatePrint() {
  let brTag = document.createElement('br');

  cars.forEach((car) => {
    let totalPath = makePath(car);
    let divTag = document.createElement('div');

    document.body.append(divTag);
    divTag.textContent = car.name + " : " + totalPath;
  })

  document.body.append(brTag);
}

function selectWinner() {
  // sort car.cnt desc
  cars.sort((a,b) => {return a.cnt > b.cnt ? -1 : a.cnt < b.cnt ? 1:0})
  
  for(let car in cars) {
    if(cars[0].cnt !== cars[car].cnt) break;
    winnerArray.push(cars[car].name);
  }
}

function printWinner() {
  let winners = '';
  let div_tag = document.createElement('div');

  winnerArray.forEach(winner => winners +=  winner + COMMA);
  winners = winners.substr(0,winners.length - COMMA_BLANK);

  document.body.append(div_tag);
  div_tag.textContent = "최종 우승자: " + winners;
}

export {raceStart};