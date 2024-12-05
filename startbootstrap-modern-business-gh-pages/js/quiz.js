"use strict"

const $ = selector => document.querySelector(selector);

let numbers = [];
let count = 0;
let score = 0;
let generatedNumber = 0;

const generateRandom = () => {
    let randomNumber = 0;
    let loop = true;
    while (loop) {
        randomNumber = Math.floor(Math.random() * 10);
        if (numbers.includes(randomNumber) == false) {
            numbers.push(randomNumber);
            return randomNumber;
        }
    }
        
};

document.addEventListener("DOMContentLoaded", () => {
    generatedNumber = generateRandom();
    while (count < 10 ) {

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

        $("#button1").addEventListener("click", () => {
            if (generatedNumber == 0 || generatedNumber == 4 || generatedNumber == 5 || generatedNumber == 9) {
                console.log("winner")
                generatedNumber = generateRandom();
            }
        })
        $("#button2").addEventListener("click", () => {
            if (generatedNumber == 3 || generatedNumber == 7) {
                console.log("winner")
                generatedNumber = generateRandom();
            }
        })
        $("#button3").addEventListener("click", () => {
            if (generatedNumber == 2 || generatedNumber == 6) {
                console.log("winner")
                generatedNumber = generateRandom();
            }
        })
        $("#button4").addEventListener("click", () => {
            if (generatedNumber == 1 || generatedNumber == 8) {
                console.log("winner")
                generatedNumber = generateRandom();
            }
        })

        count += 1;
    }
});