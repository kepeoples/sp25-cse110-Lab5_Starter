// expose.js

// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', init);

function init() {
  //console.log("init function is running");

  // Select dropdown for horn
  const hornSelect = document.getElementById('horn-select');

  // Select horn image and audio (based on position in DOM, since no IDs)
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('#expose audio');

  // Select volume slider and volume icon
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  // Select the play sound button
  const playButton = document.querySelector('#expose button');

  // Update image and sound when horn changes
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;

    hornImage.src = "./assets/images/" + selected + ".svg";
    hornAudio.src = "./assets/audio/" + selected + ".mp3";
  });

  // Update volume and icon when slider changes
  volumeSlider.addEventListener('input', () => {
    const volumeValue = Number(volumeSlider.value);
    hornAudio.volume = volumeValue / 100;

    if (volumeValue === 0) {
      volumeIcon.src = "./assets/icons/volume-level-0.svg";
    } else if (volumeValue < 33) {
      volumeIcon.src = "./assets/icons/volume-level-1.svg";
    } else if (volumeValue < 67) {
      volumeIcon.src = "./assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "./assets/icons/volume-level-3.svg";
    }
  });

  // Play the selected horn sound (and confetti for party horn)
  playButton.addEventListener('click', () => {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      confetti(); // already included via js-confetti.browser.js
    }
  });
}
