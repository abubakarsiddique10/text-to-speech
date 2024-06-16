const speechSynthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
const content = document.querySelector('.content');
const button = document.getElementById('speakStart');


const contentText = content.innerText;
utterance.text = contentText;

// Wait for the voices to be loaded
speechSynthesis.onvoiceschanged = () => {
    // Check if voices are available
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
        // Select a voice (for example, the first one)
        utterance.voice = voices[0];

        // change the voice rate
        utterance.rate = 1;
    } else {
        console.error("No voices available.");
    }
};


/* speechSynthesis.speak(utterance); */



button.addEventListener('click', () => {
    speechSynthesis.speak(utterance);

});
