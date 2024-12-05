
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
    localStorage.setItem("isMusicPlaying", "true");
    window.location.href = 'quiz.html';
};

document.addEventListener("DOMContentLoaded", () => {
    const music = new Audio("assets/Pokémon Omega Ruby & Alpha Sapphire - Vs World Champion (Highest Quality) [ ezmp3.cc ].mp3");

    $("#play-music").addEventListener("click", () => {
        music.play()
            .then(() => {
                console.log("Music started playing.");
                localStorage.setItem("isMusicPlaying", "true");
            })
            .catch(error => {
                console.error("Error playing audio:", error);
            });
    });
    $("#start").addEventListener("click", nextQuestion);
});
