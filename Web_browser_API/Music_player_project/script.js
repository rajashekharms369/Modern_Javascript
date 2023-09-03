const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");


// Song title
const songs = ["hey", "summer", "ukelele"];

// Keep track of song
let songIndex = 2;

// Initially load song deatils
loadSong(songs[songIndex]);

function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    audio.src = `album_images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add("play");
    playBtn.querySelector("fas").classList.remove("fa-play");
    playBtn.querySelector("fas").classList.add("fa-pause");
    audio.play()
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains("play");
    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
})

