// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');       // Dropdown
  const speakButton = document.querySelector('button');              // "Press to Talk" button
  const textInput = document.getElementById('text-to-speak');        // Textarea
  const faceImage = document.querySelector('img');                   // Smiley face

  let voices = [];

  // Load available voices into the dropdown
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Populate voices on load (some browsers need onvoiceschanged)
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  // Speak text when button is clicked
  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices[voiceSelect.value];

    // Open mouth when speaking starts
    utterance.onstart = () => {
      faceImage.src = "./assets/images/smiling-open.png";
    };

    // Close mouth when speaking ends
    utterance.onend = () => {
      faceImage.src = "./assets/images/smiling.png";
    };

    speechSynthesis.speak(utterance);
  });
}
