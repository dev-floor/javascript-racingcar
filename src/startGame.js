import Car from "./car.js";

let carArray = [];

function startGame(cars, num) {
  // 자동차 객체 생성
  makeCarObj(cars);
  // 횟수만큼 레이싱 시키고 결과 저장하기
  for(let i=0;i<num;i++) {
    racing();
    raceStatePrint();
  }
  // 우승자 선정
  selectWinner();
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

function raceStatePrint() {
  for(let i in carArray) {
    let path = '';
    if(carArray[i].cnt) {
      for(let j=0; j<carArray[i].cnt; j++) {
        path = path + '-';
      }
    } 
    let div = document.createElement('div');
    document.body.append(div);
    div.textContent = carArray[i].name + " : " + path;
  }
  let br = document.createElement('br');
  document.body.append(br);
}

function selectWinner() {
  
}


export {startGame};