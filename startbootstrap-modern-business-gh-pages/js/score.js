"use strict";

const $ = selector => document.querySelector(selector);

let score = localStorage.getItem("score");
$("#display").textContent = `${score}/10`;