let vocabularyContainer = document.querySelector('.vocabulary__container');
const speechSynthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

const vocab = [
    { word: "carrot", imageSrc: "carrot" },
    { word: "eggplant", imageSrc: "eggplant" },
]
const createVocabularyCard = (imageSrc, word) => {
    // Create the new vocabulary card
    const div = document.createElement("div");
    div.classList.add("vocabulary__card");

    // Use template literals for better readability
    div.innerHTML = `
        <img onclick="clickImg(event)" class="vocabulary__img" src="./assets/images/${imageSrc}.png" alt="">
        <h3 class="vocabulary__title animate__animated animate__zoomIn animate__faster">${word}</h3>
    `;
    // Append the new card to the container
    vocabularyContainer.appendChild(div);
}
vocab.forEach(({ word, imageSrc }) => createVocabularyCard(word, imageSrc))
let vocabularyTitle = document.querySelector('.vocabulary__title');

const allImages = document.querySelectorAll('.vocabulary__img')
let intervalId = null;
let counter = 0
const callBack = function () {
    if (counter < vocab.length) {
        const img = allImages[counter];
        img.click();
        counter++
    } else {
        clearInterval(intervalId);
    }
};

function clickImg(event) {
    console.log('hello click')
    const nextElementSibling = event.target.nextElementSibling
    nextElementSibling.style.display = "block"
    utterance.text = nextElementSibling.innerText;
    setTimeout(() => {
        speechSynthesis.speak(utterance);
    }, 1000);
}

document.addEventListener("click", () => {
    intervalId = setInterval(callBack, 2000);
}); 
