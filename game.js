"use strict";

const container = document.getElementById("container");
const puzzleTemplate = document.getElementById("puzzleTemplate");

const puzzleData = [
    {
        questionText: "Puzzle text something etc etc",
        img: "assets/test.png",
        answer: ["lol", "lmao"],
        hint: "bruh"
    },
    {
        questionText: "Another puzzle",
        img: "assets/test.png",
        answer: ["bruh", "brah"],
        hint: "lol"
    },
];

const hints = [];

function createPuzzleUI(index){
    container.innerHTML = "";

    if (index == puzzleData.length){
        const victory = document.createElement("h1");
        victory.textContent = "You won!";

        container.appendChild(victory);
    }else {
        const clone = puzzleTemplate.content.cloneNode(true);

        clone.getElementById("questionNumber").innerText = "Question " + (index + 1) + ":";
        clone.getElementById("questionText").innerText = puzzleData[index].questionText;
        clone.getElementById("questionImage").src = puzzleData[index].img;

        const hintsContainer = clone.getElementById("hintContainer");
        for (let i = 0; i < hints.length; i++){
            const p = document.createElement("p");
            p.innerText = "Hint " + (i + 1) + ": " + hints[i];

            hintsContainer.appendChild(p);
        }

        const inputField = clone.getElementById("inputField");

        const button = clone.getElementById("inputButton");
        button.addEventListener("click", (e)=>{
            for (let i = 0; i < puzzleData[index].answer.length; i++){
                if (inputField.value.toLowerCase() == puzzleData[index].answer[i].toLowerCase()){
                    hints.push(puzzleData[index].hint);

                    createPuzzleUI(index + 1);
                    return;
                } 
            }

            alert("Incorrect!");
        })

        container.appendChild(clone); 
    }
    
}

createPuzzleUI(0);