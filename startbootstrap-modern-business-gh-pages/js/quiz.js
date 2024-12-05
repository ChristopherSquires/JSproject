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
        else if (count == 10) {
            loop = false;
        }
    }
        
};

const checkCount = () => {
    localStorage.setItem(score);
    window.location.href = 'score.html';
};

const loadQuestion = () => {
    if (generatedNumber == 0) {
        $("#questionHead").textContent = "What Pokemon became iconic after winning the world championship in 2014?";
        $("#image").src = "assets/2014WorldChampions.png"
        $("#button1").textContent = "Pachirisu";
        $("#button2").textContent = "Garchomp";
        $("#button3").textContent = "Galvantula";
        $("#button4").textContent = "Magmortar";
    }
    else if (generatedNumber == 1) {
        $("#questionHead").textContent = "Which one of Pokemon Platinum’s champion, Cynthia, is notorious for its difficulty and has occasionally been compared to the grim reaper?";
        $("#image").src = "assets/platinum.png"
        $("#button1").textContent = "Spiritomb";
        $("#button2").textContent = "Lucario";
        $("#button3").textContent = "Togekiss";
        $("#button4").textContent = "Garchomp";
    }
    else if (generatedNumber == 2) {
        $("#questionHead").textContent = "Mega evolution is a fan-favorite mechanic last seen in 2017’s Pokémon Ultra Sun and Ultra Moon. How many mega evolutions are there in total?";
        $("#image").src = "assets/mega.png"
        $("#button1").textContent = "35";
        $("#button2").textContent = "30";
        $("#button3").textContent = "48";
        $("#button4").textContent = "50";
    }
    else if (generatedNumber == 3) {
        $("#questionHead").textContent = "As of 2013 with the release of Pokémon X and Y, the latest Pokémon type was added, the Fairy type. This type was not the first type they added after the original games, however. How many types were there in the original games?";
        $("#image").src = "assets/types.jpg"
        $("#button1").textContent = "14";
        $("#button2").textContent = "15";
        $("#button3").textContent = "16";
        $("#button4").textContent = "17";
    }
    else if (generatedNumber == 4) {
        $("#questionHead").textContent = "What Pokemon got it and it's entire evolutionary line banned from the anime?";
        $("#image").src = "assets/porygon-z.jpg"
        $("#button1").textContent = "Porygon";
        $("#button2").textContent = "Simisear";
        $("#button3").textContent = "Jynx";
        $("#button4").textContent = "Porygon2";
    }
    else if (generatedNumber == 5) {
        $("#questionHead").textContent = "What was the first Pokemon ever drawn/created?";
        $("#image").src = "assets/Test.jpg"
        $("#button1").textContent = "Rhydon";
        $("#button2").textContent = "Arceus";
        $("#button3").textContent = "Bulbasaur";
        $("#button4").textContent = "Mew";
    }
    else if (generatedNumber == 6) {
        $("#questionHead").textContent = "What is the name of the newest mechanic in the most recent games, Pokémon Scarlet and Violet?";
        $("#image").src = "assets/tera.jpg"
        $("#button1").textContent = "Mega Evolution";
        $("#button2").textContent = "Z-Moves";
        $("#button3").textContent = "Tera";
        $("#button4").textContent = "Dynamax";
    }
    else if (generatedNumber == 7) {
        $("#questionHead").textContent = "As of December 6, 2024, what is the name of the next mainline Pokémon game that will be releasing in 2025?";
        $("#image").src = "assets/zygarde.jpg"
        $("#button1").textContent = "Pokemon Legends Celebi";
        $("#button2").textContent = "Pokemon Legends Z-A";
        $("#button3").textContent = "Pokemon Legends Arceus";
        $("#button4").textContent = "Pokemon Legends Kyurem";
    }
    else if (generatedNumber == 8) {
        $("#questionHead").textContent = "After almost 30 years, Ash Ketchum’s journey finally came to an end as a new protagonist for the Pokémon anime has taken the stage. What is the name of the new protagonist?";
        $("#image").src = "assets/horizons.jpg"
        $("#button1").textContent = "Misty";
        $("#button2").textContent = "Eric";
        $("#button3").textContent = "Roy";
        $("#button4").textContent = "Liko";
    }
    else if (generatedNumber == 9) {
        $("#questionHead").textContent = "The original games, Pokémon Red and Green first released in Japan in the late 90’s, with 151 total Pokémon in the game. Who is Pokémon number 150 in the Pokedex?";
        $("#image").src = "assets/red.png"
        $("#button1").textContent = "Mewtwo";
        $("#button2").textContent = "Dragonite";
        $("#button3").textContent = "Mew";
        $("#button4").textContent = "Zapdos";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    generatedNumber = generateRandom();
    loadQuestion();

    $("#button1").addEventListener("click", () => {
        count += 1;
        if (generatedNumber == 0 || generatedNumber == 4 || generatedNumber == 5 || generatedNumber == 9) {
            score += 1;
            generatedNumber = generateRandom();
            loadQuestion();
        }
        else {;
            generatedNumber = generateRandom();
            loadQuestion();
        }
        if (count == 10) {
            checkCount();
        }
    });

    $("#button2").addEventListener("click", () => {
        count += 1;
        if (generatedNumber == 3 || generatedNumber == 7) {
            score += 1;
            generatedNumber = generateRandom();
            loadQuestion();
        }
        else {
            generatedNumber = generateRandom();
            loadQuestion();
        }
        if (count == 10) {
            checkCount();
        }
    });

    $("#button3").addEventListener("click", () => {
        count += 1;
        if (generatedNumber == 2 || generatedNumber == 6) {
            score += 1;
            generatedNumber = generateRandom();
            loadQuestion();
        }
        else {
            generatedNumber = generateRandom();
            loadQuestion();
        }
        if (count == 10) {
            checkCount();
        }
    });

    $("#button4").addEventListener("click", () => {
        count += 1;
        if (generatedNumber == 1 || generatedNumber == 8) {
            score += 1;
            generatedNumber = generateRandom();
            loadQuestion();
        }
        else {
            generatedNumber = generateRandom();
            loadQuestion();
        }
        if (count == 10) {
            checkCount();
        }
    });
});