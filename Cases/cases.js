// Basic script for the cases page
// Currently used to wire up the video playback in the detail boxes

document.addEventListener('DOMContentLoaded', () => {
    // make videos play/pause when clicked
    const videos = document.querySelectorAll('.video-container video');
    videos.forEach((video) => {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                // optionally show controls when playing
                video.setAttribute('controls', '');
            } else {
                video.pause();
            }
        });

        // stop other videos when one starts playing
        video.addEventListener('play', () => {
            videos.forEach((v) => {
                if (v !== video && !v.paused) {
                    v.pause();
                }
            });
        });
    });
});
