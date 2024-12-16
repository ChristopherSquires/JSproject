"use strict";

const $ = selector => document.querySelector(selector);

let score = localStorage.getItem("score");
$("#display").textContent = `Score: ${score}/10`;

$("#answers").textContent = "ANSWERS: Porygon, Rhydon, Mewtwo, Pokemon Legends Z-A, Tera, 15, Liko, Garchomp, 48, Pachirisu";