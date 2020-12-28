 import {nameTokens, acceptableName} from './carName.js';

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
}

export {makeCarObject, cars};