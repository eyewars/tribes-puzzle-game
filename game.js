"use strict";
let incorrectPuzzle1Count = 0;
let incorrectPuzzle2Count = 0;
let incorrectPuzzle3Count = 0;
let incorrectPuzzle4Count = 0;

function checkAnswer(index){
    const answer = document.getElementById("inputField");
    if (index == 0){
        if (answer.value.toLowerCase() == "traveler"){
            window.location.href = "correct.html"
        }else{
            window.location.href = "wrong.html"
        }
    }else if (index == 1){
        if (answer.value.toLowerCase() == "traveler"){
            window.location.href = "correct.html"
        }else{
            incorrectPuzzle1Count++;
            answer.value = "";

            if (incorrectPuzzle1Count == 3){
                window.location.href = "correct.html"
            }
        }
    }else if (index == 2){
        if (answer.value.toLowerCase() == "tattoo"){
            window.location.href = "puzzle3.html"
        }else{
            window.location.href = "hint2.html"
        }
    }else if (index == 3){
        if (answer.value.toLowerCase() == "tattoo"){
            window.location.href = "puzzle3.html"
        }else{
            incorrectPuzzle2Count++;
            answer.value = "";

            if (incorrectPuzzle2Count == 3){
                window.location.href = "puzzle3.html"
            }
        }
    }else if (index == 4){
        if (answer.value.toLowerCase() == "migration"){
            window.location.href = "puzzle4.html"
        }else{
            window.location.href = "hint3.html"
        }
    }else if (index == 5){
        if (answer.value.toLowerCase() == "migration"){
            window.location.href = "puzzle4.html"
        }else{
            incorrectPuzzle3Count++;
            answer.value = "";

            if (incorrectPuzzle3Count == 3){
                window.location.href = "puzzle4.html"
            }
        }
    }else if (index == 6){
        if (answer.value.toLowerCase() == "language"){
            window.location.href = "language.html"
        }else{
            window.location.href = "hint4.html"
        }
    }else if (index == 7){
        if (answer.value.toLowerCase() == "language"){
            window.location.href = "language.html"
        }else{
            incorrectPuzzle4Count++;
            answer.value = "";

            if (incorrectPuzzle4Count == 3){
                window.location.href = "language.html"
            }
        }
    }
}

function nextPage(index){
    if (index == 0){
        window.location.href = "start.html"
    }else if (index == 1){
        window.location.href = "puzzle1.html"
    }else if (index == 2){
        window.location.href = "left.html"
    }else if (index == 3){
        window.location.href = "right.html"
    }else if (index == 4){
        window.location.href = "hint1.html"
    }else if (index == 5){
        window.location.href = "correct1.html"
    }else if (index == 6){
        window.location.href = "blabering.html"
    }else if (index == 7){
        window.location.href = "puzzle2.html"
    }else if (index == 8){
        window.location.href = "homecoming.html"
    }else if (index == 9){
        window.location.href = "end.html"
    }else if (index == 10){
        incorrectPuzzle1Count = 0;
        incorrectPuzzle2Count = 0;
        incorrectPuzzle3Count = 0;
        incorrectPuzzle4Count = 0;
        window.location.href = "start.html"
    }
}