"use strict"

const $ = selector => document.querySelector(selector);

let numbers = [];
let count = 0;
let score = 0;

const generateRandom = () => {
    let randomNumber = Math.floor(Math.random() * 10);
    if (numbers.includes(randomNumber) == false) {
        return randomNumber;
    }
    else {
        generateRandom();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    let generatedNumber = generateRandom();
    console.log(generatedNumber);
});

// let remainingQuestions = ['Q1.html', 'Q2.html', 'Q3.html', 'Q4.html', 'Q5.html', 'Q6.html', 'Q7.html', 'Q8.html', 'Q9.html', 'Q10.html'];

// function nextQuestion() {
//     if (remainingQuestions.length === 0) {
//         alert('No more questions left!');
//         return;
//     }

//     const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
//     const nextQuestion = remainingQuestions[randomIndex];

//     remainingQuestions.splice(randomIndex, 1);

//     window.location.href = nextQuestion;
