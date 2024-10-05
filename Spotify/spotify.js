let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemplay'));
let ret = 0;

let Songs = [
    { songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "covers/10.jpg" },
    { songName: "ye kya bhat he", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "jindagi ek safar", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "bekarar he hame", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "agar tum mil jao", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "ye kon re une", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "tiger zinda hai", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Tume jo pathan meri jan", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "salam rocky bhai", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "sare jaha se achha", filePath: "songs/10.mp3", coverPath: "covers/1.jpg" },
]
songItems.forEach((element, i) => {
    element.getElementsByClassName("songName")[0].innerText = Songs[i].songName;
})
function nextplay() {
    if (songIndex > 10) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = Songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songItemPlay.classList.remove('fa-play-circle');
    songItemPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}
function play(e) {

    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = Songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    ret = 1;

}

function pause(e) {
    songIndex = parseInt(e.target.id);
    audioElement.src = `songs/${songIndex}.mp3`;
    console.log(audioElement.src);

    e.target.classList.remove('fa-pause-circle');
    e.target.classList.add('fa-play-circle');
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    ret = 0;

}


//handle play pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterSongName.innerText = Songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;


    } else {

        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})



audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
    if (progress === 100) {
        nextplay();
    }

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');


    })
}

let ret1;

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        if (ret === 1) {
            pause(e);
        } else {
            makeAllPlays();
            play(e);

        }
    })
})


document.getElementById('next').addEventListener('click', () => {
    nextplay();
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = Songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

