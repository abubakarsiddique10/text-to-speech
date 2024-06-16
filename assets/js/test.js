const content = document.querySelector('.content');
const button = document.getElementById("speakButton");
const speakStop = document.getElementById("speakStop")
const speechSynthesis = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
let count = 0;
const contents = [
    "Once an ant was very thirsty. he was searching for some water to drink. After walking around for some time, he came near the river.",

    "While he was drinking, a strong wave swept him away. He was about to drown. Suddenly, a dove sitting on a tree beside the river saw this.",

    "It took pity on the helpless ant and decided to save its life. The dove plucked a leaf and dropped it into the river water.",

    "The ant got on the leaf, and thus saved its life. The ant thanked the dove for saving its life. The ant promised to help the dove if it got any chance.",

    "One day, the dove was sitting on the same tree. There was a hunter who aimed at the dove. The ant saw it. when the hunter was about to shoot the dove, the ant bit him in the leg.",

    "The hunter missed his aim at the dove. Immediately, the dove flew away. In this way, the ant saved the life of the dove.",

    "They became good friends. They were pledge bound to help each other in weal and woe. From reading this story, we learn that we should help others in their distress.",
];

content.innerHTML = contents[0];



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

button.addEventListener('click', () => {
    content.innerHTML = contents[count];
    setTimeout(() => {
        utterance.text = contents[count];
        console.log("called");
        speechSynthesis.speak(utterance);
        count++
    }, 1000);
});



speakStop.addEventListener('click', () => {
    speechSynthesis.cancel();
})


/* const contents2 = [
    "<p>My name is Sam. I am a student. I have a daily routine. I do everything according to this routine. I get up early in the morning. I wash my face. Then I go for a walk with my father.</p>"
];

// Select the content div
const contentDiv = document.getElementById('content');
console.console.log(contentDiv)

// Insert the HTML content into the div
contentDiv.innerHTML = contents2[0]; */