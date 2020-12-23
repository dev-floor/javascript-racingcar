import Car from "./car.js";

let carArray = [];

function startGame(cars, num) {
  // 자동차 객체 생성
  makeCarObj(cars);
  // 횟수만큼 각 name들에 대해 경주 실행 시킨다. 
  for(let i=0;i<num;i++) {
    racing();
  }
  // 경주 결과 출력
}

function makeCarObj(cars) {
  for(let i in cars) {
    let car = new Car(cars[i]);
    carArray.push(car);
  }
}

function racing() {
  for(let i in carArray) {
    // 각 차에 대해서 갈 지 말 지 결정
    let raceConditionNum = Math.floor(Math.random()*9);
    if(raceConditionNum >= 4) {
      carArray[i].cnt++;
    }
  }
}

export {startGame};