document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoElement');
    const videoSource = document.getElementById('videoSource');
    const pipMessage = document.getElementById('pipMessage'); 

    // Pip
    function changeVideoAndEnterPiP(videoUrl) {
        videoSource.src = videoUrl;
        videoElement.load();
        videoElement.play().then(() => {
            if (videoElement !== document.pictureInPictureElement) {
                videoElement.requestPictureInPicture().then(() => {
                    pipMessage.style.display = 'block'; 
                }).catch(error => {
                    console.error('Error attempting to enable Picture-in-Picture mode:', error);
                });
            }
        }).catch(error => {
            console.error('Error playing the video:', error);
        });
    }

    document.addEventListener('leavepictureinpicture', () => {
        pipMessage.style.display = 'none'; 
    });

    // Video players
        document.getElementById('minecraftParkourButton').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/PLACEHOLDER.mp4');
        });

        document.getElementById('rainFallOutsideButton').addEventListener('click', () => {
            changeVideoAndEnterPiP('videos/PLACEHOLDER.mp4');
        });


        // Back Button
        document.getElementById('backButton').addEventListener('click', () => {
            window.location.href = 'pip_window.html'; 
        }); 



});