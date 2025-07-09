document.addEventListener('DOMContentLoaded', function() {
    
    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const volumeSlider = document.getElementById('volume-slider');

    if (!audio || !playBtn || !pauseBtn || !volumeSlider) {
        console.error("One or more audio elements missing!");
        return;
    }

    playBtn.addEventListener('click', function() {
        audio.play().catch(e => console.error("Playback failed:", e));
    });

   
    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

   
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value;
    });

    
    audio.addEventListener('play', function() {
        playBtn.disabled = true;
        pauseBtn.disabled = false;
    });

    audio.addEventListener('pause', function() {
        playBtn.disabled = false;
        pauseBtn.disabled = true;
    });

    
    pauseBtn.disabled = true;
});