const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    const body = document.querySelector('body');
    btn.classList.add('btn');
    btn.innerText = sound
    
    btn.addEventListener('click', () => {
        document.getElementById(sound).play();
        // stopSong();
        if(sound === sounds[5]){
            alert('경고!');
        }
    })

    body.appendChild(btn);
})

function stopSong() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    })
}