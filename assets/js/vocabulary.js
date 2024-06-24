let containerVocab = document.querySelector('.container__vocab');
let cardImg = document.querySelector('.card__img')
const cardContent = document.querySelector('.card__content')
const cardWord = document.getElementById('card__word');
const nextButton = document.getElementById('nextButton');
const speechSynthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();



// Wait for the voices to be loaded
speechSynthesis.onvoiceschanged = () => {
    // Check if voices are available
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
        // Select a voice (for example, the first one)
        utterance.voice = voices[0];

        // change the voice rate
        utterance.rate = 0.6;
    } else {
        console.error("No voices available.");
    }
};

const createVocabularyCard = (imageSrc, word) => {
    // Clear the container
    containerVocab.innerHTML = "";

    // Create the new vocabulary card
    const div = document.createElement("div");
    div.classList.add("vocabulary__card");

    // Use template literals for better readability
    div.innerHTML = `
        <img onclick="speak(event)" class="card__img animate__animated animate__zoomIn animate__slow" src="./assets/images/vocabulary/vegetables/${imageSrc}" alt="${word}">
        <h1 class="card__content">
            <span id="card__word" class="animate__animated animate__bounceIn animate__slow">${word}</span>
        </h1>
    `;

    // Append the new card to the container
    containerVocab.appendChild(div);
}

const vocab = [
    { word: "carrot", imageSrc: "carrot.png" },
    { word: "eggplant", imageSrc: "eggplant.png" },
    { word: "radish", imageSrc: "radish.png" },
    { word: "mushroom", imageSrc: "mushroom.png" },
    { word: "potato", imageSrc: "potato.png" },
    { word: "peas", imageSrc: "peas.png" },
    { word: "pumpkin", imageSrc: "pumpkin.png" },
    { word: "spinach", imageSrc: "spinach.png" },
    { word: "corn", imageSrc: "corn.png" },
    { word: "cauliflower", imageSrc: "cauliflower.png" },
    { word: "cabbage", imageSrc: "cabbage.png" },
    { word: "cucmber", imageSrc: "cucmber.png" },
    { word: "broccoli", imageSrc: "broccoli.png" },
    { word: "onion", imageSrc: "onion.png" },
    { word: "beet", imageSrc: "beet.png" },
    { word: "garlic", imageSrc: "garlic.png" },
    { word: "chili", imageSrc: "chili.png" },
    { word: "ginger", imageSrc: "ginger.png" },
    { word: "gourd", imageSrc: "gourd.png" },
    { word: "coriander", imageSrc: "coriander.png" },
    { word: "okra", imageSrc: "okra.png" },
    { word: "beans", imageSrc: "beans.png" },
]

let intervalId = null;
let counter = 0
const callBack = function () {
    if (counter < vocab.length) {
        const { imageSrc, word } = vocab[counter]
        createVocabularyCard(imageSrc, word);
        let cardImg = document.querySelector('.card__img');
        if (cardImg) {
            // Trigger a click event on the img element
            setTimeout(() => {
                cardImg.click();
            }, 2000);
        }
        counter++
    } else {
        clearInterval(intervalId);
    }
};
intervalId = setInterval(callBack, 5000);


function speak(event) {
    const nextElementSibling = event.target.nextElementSibling
    nextElementSibling.children[0].style.display = "block";
    utterance.text = nextElementSibling.children[0].innerText
    speechSynthesis.speak(utterance);
}
