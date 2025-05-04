window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImg = document.querySelector('img');

  function populateVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const utter = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = synth.getVoices()[voiceSelect.value];
    utter.voice = selectedVoice;

    utter.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };
    utter.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utter);
  });
}
