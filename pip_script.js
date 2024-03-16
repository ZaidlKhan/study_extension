document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('videoElement');
    const videoSource = document.getElementById('videoSource');
    const pipMessage = document.getElementById('pipMessage'); 

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

    document.getElementById('minecraftParkourButton').addEventListener('click', () => {
        changeVideoAndEnterPiP('videos/mc.mp4');
    });

    document.getElementById('rainFallOutsideButton').addEventListener('click', () => {
        changeVideoAndEnterPiP('videos/mc.mp4');
    });

    document.addEventListener('leavepictureinpicture', () => {
        pipMessage.style.display = 'none'; 
    });
    
    document.getElementById('moreButton').addEventListener('click', () => {
        window.location.href = 'nature.html'; 
      });
      

      document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'pip_window.html'; 
      }); 
});