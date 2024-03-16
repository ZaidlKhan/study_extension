document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoElement');
    const videoSource = document.getElementById('videoSource');

    function changeVideoAndEnterPiP(videoUrl) {
        videoSource.src = videoUrl;
        videoElement.load();
        videoElement.play().then(() => {
            if (videoElement !== document.pictureInPictureElement) {
                videoElement.requestPictureInPicture().catch(error => {
                    console.error('Error attempting to enable Picture-in-Picture mode:', error);
                });
            }
        }).catch(error => {
            console.error('Error playing the video:', error);
        });
    }

    document.getElementById('minecraftParkourButton').addEventListener('click', () => {
        changeVideoAndEnterPiP('videos/mc.mp4');
    });

    document.getElementById('rainFallOutsideButton').addEventListener('click', () => {
        changeVideoAndEnterPiP('videos/mc.mp4');
    });

});
