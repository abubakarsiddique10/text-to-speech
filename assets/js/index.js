const speakStop = document.getElementById('speakStop');
const content = document.querySelector('.para');
console.log(content)
const speechSynthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();

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
        utterance.rate = 0.7;
    } else {
        console.error("No voices available.");
    }
};

const button = document.getElementById('speakStart');
/* const para = document.querySelector('.para');
let count = 0;
const contents = [
    "My name is Sam. I am a student. I have a daily routine. I do everything according to this routing. I get up early in the morning. I wash my face. Then I go for a walk with my father.",

    "When I come back I take a bath. then I have my breakfast. After breakfast, I brush my teeth and go to school.",

    "I always reach school on time. I attend all my classes. Then I come back home at 4 pm. In the afternoon, I play football or cricket with friends.",

    "In the evening, I study for some time. Then I watch TV. After supper, I go to bed. I follow my daily routine strictly. But On holidays the routine is different.",

    "Sometimes, I visit the zoo with my parents, and other times, I spend time at my relatives' house. However, I never break the golden rule of 'early to bed and early to rise'.",
]

para.innerText = contents[count] */
// Click event listener for reading content
button.addEventListener('click', () => {
    speechSynthesis.speak(utterance);

});

// Click event listener for stopping speech
/* speakStop.addEventListener('click', () => {
    speechSynthesis.cancel();
});  */
