let synth = window.speechSynthesis;

function speakerOn() {
    if ('speechSynthesis' in window) {
        const textFromPage = document.body.textContent;

        if (synth.speaking) {
            synth.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(textFromPage);
        synth.speak(utterance);
    } else {
        alert('Web Speech API are not supported.');
    }
}

function speakerOff() {
    if (synth.speaking) {
        synth.cancel();
    }
}