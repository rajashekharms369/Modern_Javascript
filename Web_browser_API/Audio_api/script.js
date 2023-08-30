const audio = document.getElementById("audio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const currentTime = document.getElementById("volume");
const volume = document.getElementById("volume");

play.addEventListener("click", () => {
    audio.play();
})
pause.addEventListener("click", () => {
    audio.pause();
});

