
/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// "use stricthi"

"use strict";

const $ = selector => document.querySelector(selector);

function nextQuestion() {
    window.location.href = 'quiz.html';
};

document.addEventListener("DOMContentLoaded", () => {
    $("#start").addEventListener("click", nextQuestion);
});
