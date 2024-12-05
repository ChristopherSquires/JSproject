"use strict"

const $ = selector => document.querySelector(selector);

let numbers = [];
let count = 0;
let score = 0;

const generateRandom = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    if (numbers.includes(randomNumber) == false) {
        numbers.push(randomNumber);
        return randomNumber;
    }
    else {
        generateRandom();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let generatedNumber = generateRandom();

    if (generatedNumber == 0) {
        console.log("0")
    }
    else if (generatedNumber == 1) {
        console.log("1")
    }
    else if (generatedNumber == 2) {
        console.log("2")
    }
    else if (generatedNumber == 3) {
        console.log("3")
    }
    else if (generatedNumber == 4) {
        console.log("4")
    }
    else if (generatedNumber == 5) {
        console.log("5")
    }
    else if (generatedNumber == 6) {
        console.log("6")
    }
    else if (generatedNumber == 7) {
        console.log("7")
    }
    else if (generatedNumber == 8) {
        console.log("8")
    }
    else if (generatedNumber == 9) {
        console.log("9")
    }
});