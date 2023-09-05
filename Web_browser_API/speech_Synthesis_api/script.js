const synth = window.speechSynthesis;

function onSubmit(e){
    e.preventDefault();
    const textInput = document.getElementById("text-input");

    const utterThis = new SpeechSynthesisUtterance(textInput.value);

    synth.speak(utterThis);
}

const voiceSelect = document.getElementById("voice-select");

function addVoicesToSelect(){

}

document.getElementById("form").addEventListener("submit", onSubmit);
