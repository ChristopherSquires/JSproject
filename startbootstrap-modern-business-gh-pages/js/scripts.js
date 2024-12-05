/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
"use strict"

// function nextQuestion() {
//     const questions = ['Q1.html', 'Q2.html', 'Q3.html', 'Q4.html', 'Q5.html', 'Q6.html', 'Q7.html', 'Q8.html', 'Q9.html', 'Q10.html'];

//     const randomChoice = Math.floor(Math.random() * questions.length);

//     window.location.href = questions[randomChoice];
// }


let remainingQuestions = ['Q1.html', 'Q2.html', 'Q3.html', 'Q4.html', 'Q5.html', 'Q6.html', 'Q7.html', 'Q8.html', 'Q9.html', 'Q10.html'];

function nextQuestion() {
    if (remainingQuestions.length === 0) {
        alert('No more questions left!');
        return;
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const nextQuestion = remainingQuestions[randomIndex];

    remainingQuestions.splice(randomIndex, 1);

    window.location.href = nextQuestion;
};