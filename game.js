"use strict";

const container = document.getElementById("container");
const puzzleTemplate = document.getElementById("puzzleTemplate");
const startTemplate = document.getElementById("startTemplate");
const hintTemplate = document.getElementById("hintTemplate");
const vicotryTemplate = document.getElementById("victoryTemplate");

const puzzleData = [
    {
        questionText: "You met another guy. He is confused to see you. He doesnt let you through unless you answer his question: He has a Backpack and no home. What is he?",
        img: null,
        answer: ["traveler", "traveller", "travler"],
        aduio: null
    },
    {
        questionText: "The traveler is happy now and jumps like a happy person. And he leads u to the other direction of the crossing. Hopefully it's the right direction. He starts blabering stuff and tells something about a tribe which has random things on there skin but there are nice and have food. I should visit them. You are approaching the this village. You see they different and also do a kind of ritual. It looks like they want to tell a story with ink, etched in skin. What are we seeing?",
        img: null,
        answer: ["tattoo", "tatoo", "tatto", "tato"],
        aduio: null
    },
    {
        questionText: "they saw u and are really nice and asked u if u want to join the ritual. Blurb about the ritual and u like it. You fall asleep there. And the next day they give u food. They said there move the whole village somewhere else but it’s in the direction of your own tribe. they asked if u want to join? Of course u said yes, u like to party. Joining the travel you are part of a movement from one part to another is called. This is called something.",
        img: null,
        answer: ["migration", "migrate", "migrasion"],
        aduio: null
    },
    {
        questionText: "You joined the party and headed towards the direction of your own tribe, when you got there, the ones you were travelling with heard your tribe making some clicking noises (SHOW AUDIO FILE OF CLICKING), what could these noises be/mean?",
        img: null,
        answer: ["language", "langage", "languge", "langauge", "languige"],
        aduio: null
    },
];

const hintData = [
    {
        hintText: "Oh you ask him “what are you?” He got a little offend / dissapointed. He screams and starts chasing you to the other path. you are facing a village where you look for a hiding spot. And blabla bla history about totemsn. Oh wait this one totem looks completely different. Cat picture with Traveler on it (it's the hint) Maybe it is a hint for our last question we got from the chasing guy.",
        img: null,
        audio: null
    },
    {
        hintText: "",
        img: "assets/tattoo.jpg",
        audio: null
    },
    {
        hintText: "U asked someone of the the tribe want the movement is called. He pointed on the wall of a house and u see strange numbers. What does this mean? Numbers instead of Letters. Maybe he gave us a hint 130907180120091514",
        img: "assets/migration.png",
        audio: null
    },
    {
        hintText: "You watched them now for a while and it’s looks like they communicate which each other. So maybe it is used as a …?",
        img: null,
        audio: null
    },
];

function createPuzzleUI(index){
    container.innerHTML = "";

    if (index == puzzleData.length){
        const clone = vicotryTemplate.content.cloneNode(true);
        clone.getElementById("victory").textContent = "You won!";

        clone.getElementById("victoryText").textContent = "After a while they showed u a translation sheet u can figure out they tell u the right way to you're  tribe. Nice it is you're neighbour tribe. So you said bye and thanks for their help. And left to you're  tribe. They were happy to see u and now made a big party.";

        container.appendChild(clone);
    }else {
        const clone = puzzleTemplate.content.cloneNode(true);

        clone.getElementById("questionNumber").innerText = "Puzzle " + (index + 1) + ":";

        clone.getElementById("questionText").innerText = puzzleData[index].questionText;

        if (puzzleData[index].img != null){
            clone.getElementById("questionImage").src = puzzleData[index].img;
        }

        const inputField = clone.getElementById("inputField");

        const button = clone.getElementById("inputButton");
        button.addEventListener("click", (e)=>{
            for (let i = 0; i < puzzleData[index].answer.length; i++){
                if (inputField.value.toLowerCase() == puzzleData[index].answer[i].toLowerCase()){
                    createPuzzleUI(index + 1);
                    return;
                } 
            }

            createHintUI(index);
        })

        container.appendChild(clone); 
    } 
}

function createHintUI(index){
    container.innerHTML = "";

    const clone = hintTemplate.content.cloneNode(true);

    const backButton = clone.getElementById("backButton");
    backButton.addEventListener("click", (e)=>{
        createPuzzleUI(index);
    })

    clone.getElementById("hintNumber").innerText = "Hint " + (index + 1) + ":";

    clone.getElementById("hintText").innerText = hintData[index].hintText;

    if (hintData[index].img != null){
        clone.getElementById("hintImage").src = hintData[index].img;
    }

    container.appendChild(clone);
}

function init(){
    container.innerHTML = "";

    const clone = startTemplate.content.cloneNode(true);

    clone.getElementById("playButton").addEventListener("click", (e)=>{
        createPuzzleUI(0);
    })

    container.appendChild(clone);

    //createHintUI(0);
}
init();