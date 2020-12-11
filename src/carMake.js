 import {nameTokens, acceptableName} from './carName.js';

let carArray = [];

 class Car{
    constructor(name){
        this.name = name;
        this.path = "";
        this.pathCount = 0;
    }
}

export default function makeCarObject(){
    nameTokens.forEach(function(obj){
        let tmp = new Car(obj);
        carArray.push(tmp);
    })
}

export {makeCarObject, carArray};