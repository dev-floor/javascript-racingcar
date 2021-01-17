 import {nameTokens, acceptableName} from './carName.js';

const inputTryCountPage = document.querySelector(".car-game-try-input");

let cars = [];

class Car {
    constructor(name) {
        this.name = name;
        this.path = "";
        this.pathCount = 0;
    }
}

export default function makeCarObject() {
    nameTokens.forEach(function(name) {
        const car = new Car(name);
        cars.push(car);
    })
    inputTryCountPage.classList.remove("hidden");
    inputTryCountPage.classList.add("show");
}

export {makeCarObject, cars};